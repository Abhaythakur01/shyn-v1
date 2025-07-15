const router = require('express').Router();
const { getEvents, getEventById } = require('../controllers/eventsController');

// @route   GET /api/events
// @desc    Get all upcoming events
router.get('/', getEvents);

// @route   GET /api/events/:id
// @desc    Get a single event by its ID
router.get('/:id', getEventById);

module.exports = router;