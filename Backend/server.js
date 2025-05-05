const express = require('express');
const sequelize = require('./config/db');
const authRoutes = require('./routes/auth');
const paymentRoutes = require('./routes/payment'); // Import payment routes
require('dotenv').config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Enable CORS with specific origin
const cors = require('cors');
app.use(cors({
  origin: ['https://aldrin-cse-7-nutrilite.vercel.app/'], // Replace with your actual Vercel frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  credentials: true, // Allow cookies if needed
}));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/payment', paymentRoutes); // Mount payment routes

// Sync database and start server
sequelize
  .sync()
  .then(() => {
    console.log('Database connected');
    const PORT = process.env.PORT || 5000; // Use dynamic port for deployment
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
