const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  let token;

  // Check if there is an authorization header AND it starts with 'Bearer'
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get token from header (Format is "Bearer <token_string>", so we split by space and take the 2nd item)
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret');

      // Get user from the token (the token has the user's ID packed inside it)
      // We use .select('-password') to ensure we don't accidentally attach the password to the request
      req.user = await User.findById(decoded.id).select('-password');

      // Let the user proceed to the next function (into the club!)
      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  // If no token was found at all
  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

module.exports = { protect };
