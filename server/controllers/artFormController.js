const { query } = require('../config/db');

/**
 * @desc    Get all art forms
 * @route   GET /api/art-forms
 * @access  Public
 */
const getArtForms = async (req, res) => {
    try {
        const artForms = await query('SELECT * FROM art_forms ORDER BY id');
        res.status(200).json(artForms.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

module.exports = {
    getArtForms,
};