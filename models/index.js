import sequelize from '../config/db.js';
import MenuItem from './MenuItem.js';
import Order from './Order.js';

MenuItem.sync();
Order.sync();

export { sequelize, MenuItem, Order };
