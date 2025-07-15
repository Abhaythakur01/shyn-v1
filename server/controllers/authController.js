const { query } = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); // Import the library

// Helper function to generate a token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d', // The token will be valid for 30 days
  });
};

/**
 * @desc    Register a new user
 * @route   POST /api/user/register
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

        // --- NEW: Generate a token and send it back ---
        res.status(201).json({
            message: "User registered successfully!",
            token: generateToken(newUser.id), // Send the token
            user: newUser
        });

    } catch (err) {
        console.error('Registration Error:', err);
        res.status(500).json({ message: 'Server error during registration.' });
    }
};

/**
 * @desc    Authenticate a user & get token
 * @route   POST /api/user/login
 * @access  Public
 */

const getUserProfile = async (req, res) => {
  // Because our 'protect' middleware ran successfully,
  // the user's data is attached to the request object (req.user).
  res.status(200).json(req.user);
};

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
        
        // --- NEW: Generate a token and send it back ---
        res.status(200).json({
            message: "Login successful!",
            token: generateToken(user.id), // Send the token
            user: userWithoutPassword
        });

    } catch (err) {
        console.error('Login Error:', err);
        res.status(500).json({ message: 'Server error during login.' });
    }
};

module.exports = {
    register,
    login,
    getUserProfile,
};