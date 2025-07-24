const router = require('express').Router();
const { getArtForms } = require('../controllers/artFormController');

// @route   GET /api/art-forms
router.get('/', getArtForms);

module.exports = router;