const express = require('express');
const sequelize = require('./config/db');
const authRoutes = require('./routes/auth');
const paymentRoutes = require('./routes/payment');  // Import payment routes
require('dotenv').config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Enable CORS if your frontend is on a different port/domain
const cors = require('cors');
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/payment', paymentRoutes);  // Mount payment routes

// Sync database and start server
sequelize
  .sync()
  .then(() => {
    console.log('Database connected');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
