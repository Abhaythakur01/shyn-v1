const { query } = require('../config/db');

/**
 * @desc    Get all upcoming events
 * @route   GET /api/events
 * @access  Public
 */
const getEvents = async (req, res) => {
    try {
        // Fetches events that are happening today or in the future
        const result = await query(
            "SELECT * FROM events WHERE event_date >= NOW() ORDER BY event_date ASC"
        );
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

/**
 * @desc    Get a single event by its ID
 * @route   GET /api/events/:id
 * @access  Public
 */
const getEventById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await query('SELECT * FROM events WHERE id = $1', [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ msg: 'Event not found' });
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};


module.exports = {
    getEvents,
    getEventById,
};