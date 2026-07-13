const express = require('express');
const router = express.Router();
const { getMe } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

// We add 'protect' as the second argument. It runs FIRST, and if it calls next(), getMe runs SECOND.
router.get('/me', protect, getMe);

module.exports = router;
