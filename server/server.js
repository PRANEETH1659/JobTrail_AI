require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Connect to Database
connectDB();

// Initialize the Express app
const app = express();

// Middleware
app.use(cors()); // Allow frontend to communicate with backend
app.use(express.json()); // Allow backend to parse JSON data in the request body

// API Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Basic Health Check Route
app.get('/', (req, res) => {
  res.json({ message: 'JobTrail API is running!' });
});

// Configure the port and start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is successfully running on port ${PORT}`);
});
