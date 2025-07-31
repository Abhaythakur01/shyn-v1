const { query } = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Helper function to generate a token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d', // The token will be valid for 30 days
  });
};

/**
 * @desc    Register a new user
 * @route   POST /api/auth/register
 * @access  Public
 */
const register = async (req, res) => {
    const { email, password, fullName } = req.body;

    if (!email || !password || !fullName) {
        return res.status(400).json({ message: 'Please provide email, password, and full name.' });
    }

    try {
        const existingUser = await query('SELECT * FROM users WHERE email = $1', [email]);
        if (existingUser.rows.length > 0) {
            return res.status(409).json({ message: 'An account with this email already exists.' });
        }

        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        const newUserQuery = 'INSERT INTO users (email, password_hash, full_name) VALUES ($1, $2, $3) RETURNING id, email, full_name, created_at';
        const newUserResult = await query(newUserQuery, [email, passwordHash, fullName]);
        const newUser = newUserResult.rows[0];

        res.status(201).json({
            message: "User registered successfully!",
            token: generateToken(newUser.id),
            user: newUser
        });

    } catch (err) {
        console.error('Registration Error:', err);
        res.status(500).json({ message: 'Server error during registration.' });
    }
};

/**
 * @desc    Authenticate a user & get token
 * @route   POST /api/auth/login
 * @access  Public
 */
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userResult = await query('SELECT * FROM users WHERE email = $1', [email]);

        if (userResult.rows.length === 0) {
            return res.status(401).json({ message: 'Invalid credentials. User not found.' });
        }

        const user = userResult.rows[0];
        const isMatch = await bcrypt.compare(password, user.password_hash);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials. Password incorrect.' });
        }
        
        const { password_hash, ...userWithoutPassword } = user;
        
        res.status(200).json({
            message: "Login successful!",
            token: generateToken(user.id),
            user: userWithoutPassword
        });

    } catch (err) {
        console.error('Login Error:', err);
        res.status(500).json({ message: 'Server error during login.' });
    }
};

/**
 * @desc    Get user profile
 * @route   GET /api/auth/profile
 * @access  Private
 */
const getUserProfile = async (req, res) => {
  res.status(200).json(req.user);
};

/**
 * @desc    Update user profile
 * @route   PUT /api/auth/profile
 * @access  Private
 */
const updateUserProfile = async (req, res) => {
    // For now, we only update full_name. We can add bio, avatar_url, etc. later.
    const { fullName } = req.body;
    const userId = req.user.id;

    try {
        // Ensure the user exists (though the 'protect' middleware already does this)
        const userResult = await query('SELECT * FROM users WHERE id = $1', [userId]);
        if (userResult.rows.length === 0) {
            return res.status(404).json({ message: 'User not found.' });
        }
        
        const updatedUserResult = await query(
            'UPDATE users SET full_name = $1 WHERE id = $2 RETURNING id, email, full_name, role, is_member',
            [fullName, userId]
        );

        res.status(200).json(updatedUserResult.rows[0]);

    } catch (err) {
        console.error('Profile Update Error:', err);
        res.status(500).json({ message: 'Server error during profile update.' });
    }
};

module.exports = {
    register,
    login,
    getUserProfile,
    updateUserProfile, // <<< EXPORT THE NEW FUNCTION
};