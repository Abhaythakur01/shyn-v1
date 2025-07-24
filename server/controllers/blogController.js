const { query } = require('../config/db');

/**
 * @desc    Get all blog posts
 * @route   GET /api/blogs
 * @access  Public
 */
const getBlogPosts = async (req, res) => {
    try {
        const result = await query('SELECT * FROM blog_posts ORDER BY created_at DESC');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

/**
 * @desc    Get a single blog post by ID
 * @route   GET /api/blogs/:id
 * @access  Public
 */
const getBlogPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await query('SELECT * FROM blog_posts WHERE id = $1', [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ msg: 'Blog post not found' });
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

module.exports = {
    getBlogPosts,
    getBlogPostById,
};