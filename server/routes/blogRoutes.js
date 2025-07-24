const router = require('express').Router();
const { getBlogPosts, getBlogPostById } = require('../controllers/blogController');

// @route   GET /api/blogs
// @desc    Get all blog posts
router.get('/', getBlogPosts);

// @route   GET /api/blogs/:id
// @desc    Get a single blog post by its ID
router.get('/:id', getBlogPostById);

module.exports = router;