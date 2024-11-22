const express = require('express');
const router = express.Router();
const newsController = require('../controllers/NewsController');

// Route to handle fetching all news items
router.get('/', newsController.index);

// Route to handle fetching a specific news item by slug
router.get('/:slug', newsController.show);

module.exports = router;