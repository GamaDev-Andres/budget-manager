import { DataTypes } from 'sequelize';

import { sequelize } from '../config/sequelize.js';

export const Transaction = sequelize.define('transactions', {
  transaction_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true
  },
  concept: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  type: {
    type: DataTypes.ENUM("ingreso", "egreso"),
    allowNull: false,
  },
  value: {
    type: DataTypes.DOUBLE.UNSIGNED,
    allowNull: false
  }
});
