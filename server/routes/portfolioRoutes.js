const router = require('express').Router();
const { getPortfolioItems, addPortfolioItem, deletePortfolioItem } = require('../controllers/portfolioController');
const { protect } = require('../middleware/authMiddleware');

// All routes here are protected and require a valid token
router.route('/')
    .get(protect, getPortfolioItems)
    .post(protect, addPortfolioItem);

router.route('/:id')
    .delete(protect, deletePortfolioItem);

module.exports = router;