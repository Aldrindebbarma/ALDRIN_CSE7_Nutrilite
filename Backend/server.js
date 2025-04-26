import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import menuRoutes from './routes/menuRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import { sequelize } from './models/index.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/menu', menuRoutes);
app.use('/api/orders', orderRoutes);

sequelize.authenticate()
  .then(() => {
    console.log('Database connected');
    app.listen(5000, () => console.log('Server running on port 5000'));
  })
  .catch(err => console.error('Unable to connect:', err));
