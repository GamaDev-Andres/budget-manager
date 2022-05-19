import { DataTypes } from 'sequelize';

import { sequelize } from '../config/sequelize.js';
import { Transaction } from './Transaction.js';

export const User = sequelize.define('users', {
  user_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true

  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { timestamps: false });

User.hasMany(Transaction, {
  foreignKey: {
    name: "user_id",
    allowNull: false,
  },
  sourceKey: "user_id"
})