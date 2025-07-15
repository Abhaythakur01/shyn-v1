const { query } = require('../config/db');

/**
 * @desc    Get all portfolio items for the logged-in user
 * @route   GET /api/portfolio
 * @access  Private
 */
const getPortfolioItems = async (req, res) => {
    try {
        // req.user.id is available because of our 'protect' middleware
        const result = await query(
            'SELECT * FROM portfolio_items WHERE user_id = $1 ORDER BY created_at DESC',
            [req.user.id]
        );
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

/**
 * @desc    Add a new portfolio item
 * @route   POST /api/portfolio
 * @access  Private
 */
const addPortfolioItem = async (req, res) => {
    const { title, description, item_type, media_url, thumbnail_url } = req.body;

    try {
        const newItem = await query(
            'INSERT INTO portfolio_items (user_id, title, description, item_type, media_url, thumbnail_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [req.user.id, title, description, item_type, media_url, thumbnail_url]
        );
        res.status(201).json(newItem.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

/**
 * @desc    Delete a portfolio item
 * @route   DELETE /api/portfolio/:id
 * @access  Private
 */
const deletePortfolioItem = async (req, res) => {
    try {
        const { id } = req.params;

        // Ensure the item belongs to the user trying to delete it
        const item = await query('SELECT * FROM portfolio_items WHERE id = $1 AND user_id = $2', [id, req.user.id]);

        if (item.rows.length === 0) {
            return res.status(404).json({ msg: 'Portfolio item not found or user not authorized.' });
        }

        await query('DELETE FROM portfolio_items WHERE id = $1', [id]);

        res.json({ msg: 'Portfolio item removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

module.exports = {
    getPortfolioItems,
    addPortfolioItem,
    deletePortfolioItem,
};