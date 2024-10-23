const express = require('express');
const router = express.Router();
const { getCategories, addCategory } = require('../controllers/categoryController');

// POST /categories (add a new category)
router.post('/', addCategory);

// GET /categories (retrieve all categories)
router.get('/', getCategories);

module.exports = router;
