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
    allowNull: false,
    unique: true
  },
}, { timestamps: false });

Category.hasMany(Transaction, {
  foreignKey: {
    name: "category_id",
    allowNull: true
  },
  sourceLey: "category_id"
})
Transaction.belongsTo(Category, {
  foreignKey: {
    name: "category_id",
    allowNull: true
  },
  sourceLey: "category_id"
})
