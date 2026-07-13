const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Helper function to generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'fallback_secret', {
    expiresIn: '30d',
  });
};

// @desc    Register new user
// @route   POST /api/auth/signup
// @access  Public
const signupUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1. Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // 2. Create the user (Password hashing happens automatically in User.js!)
    const user = await User.create({
      name,
      email,
      password,
      // We don't pass resumeText or skills here; they will just use the default empty values
    });

    // 3. Send back user data and a token
    if (user) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error: ' + error.message });
  }
};

// @desc    Authenticate a user (Login)
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Find user by email (we need to explicitly select password because we hid it by default in the schema)
    const user = await User.findOne({ email }).select('+password');

    // 2. Check if user exists and password matches
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error: ' + error.message });
  }
};

module.exports = {
  signupUser,
  loginUser,
};
