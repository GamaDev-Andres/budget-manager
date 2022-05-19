import { DataTypes } from 'sequelize';

import { sequelize } from '../config/sequelize.js';
import { Transaction } from './Transaction.js';

export const Category = sequelize.define('categories', {
  category_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
}, { timestamps: false });

Category.hasMany(Transaction, {
  foreignKey: "category_id",
  sourceLey: "category_id"
})