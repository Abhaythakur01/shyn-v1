const jwt = require('jsonwebtoken');
const { query } = require('../config/db');

const protect = async (req, res, next) => {
  let token;

  // Check for the token in the Authorization header
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get token from header (e.g., "Bearer eyJhbGciOi...")
      token = req.headers.authorization.split(' ')[1];

      // Verify the token using your secret
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the database using the ID from the token
      // and attach it to the request object for use in our protected routes
      const userResult = await query('SELECT id, email, full_name, role, is_member FROM users WHERE id = $1', [decoded.id]);
      
      if (userResult.rows.length === 0) {
          return res.status(401).json({ message: 'Not authorized, user not found' });
      }

      req.user = userResult.rows[0];

      next(); // Move on to the next step (the actual route handler)
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = { protect };