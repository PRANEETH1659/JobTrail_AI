const User = require('../models/User');

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = async (req, res) => {
  // We can access req.user here because our 'protect' middleware attached it!
  res.status(200).json(req.user);
};

module.exports = {
  getMe,
};
