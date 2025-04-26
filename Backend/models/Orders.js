import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Order = sequelize.define('Order', {
  items: { type: DataTypes.JSON },
  total: DataTypes.FLOAT,
  customer: {
    type: DataTypes.JSON // name, phone, address etc.
  },
  status: { type: DataTypes.STRING, defaultValue: 'pending' }
});

export default Order;
