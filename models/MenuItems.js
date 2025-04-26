import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const MenuItem = sequelize.define('MenuItem', {
  name: { type: DataTypes.STRING, allowNull: false },
  description: DataTypes.STRING,
  price: { type: DataTypes.FLOAT, allowNull: false },
  image: DataTypes.STRING,
  category: DataTypes.STRING,
});

export default MenuItem;
