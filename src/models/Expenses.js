'use strict';

const { sequelize } = require('../database/db');
const { DataTypes } = require('sequelize');

const Expenses = sequelize.define('Expanses', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  spentAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  note: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'expanses',
});

module.exports = { Expenses };
