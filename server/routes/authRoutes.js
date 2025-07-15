const router = require('express').Router();
const { register, login, getUserProfile } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const { validateRegistration } = require('../middleware/validation'); // Import the new middleware

// Apply the validation middleware to the register route
router.post('/register', validateRegistration, register);
router.post('/login', login);

router.get('/profile', protect, getUserProfile);

module.exports = router;