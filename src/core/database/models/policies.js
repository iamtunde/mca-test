'use strict';
const {
  Model
} = require('sequelize');
const Purchases = require('./purchases');

module.exports = (sequelize, DataTypes) => {
  class Policies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(Purchases) {
      Purchases.hasMany(Purchases)
    }
  }
  Policies.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    type: DataTypes.TEXT,
    price: DataTypes.DOUBLE,
    type: {
      type: DataTypes.ENUM,
      values: ['active','in_active'],
      defaultValue: 'active',
    }
  }, {
    sequelize,
    modelName: 'policies',
  });
  return Policies;
};