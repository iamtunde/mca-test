'use strict';
const {
  Model
} = require('sequelize');
const User = require('./users');
const Policy = require('./policies');
module.exports = (sequelize, DataTypes) => {
  class Purchases extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(User, Policy) {
      Purchases.belongsTo(User)
      Purchases.belongsTo(Policy)
    }
  }
  Purchases.init({
    id: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    policyId: DataTypes.INTEGER,
    reference: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM,
      values: ['failed', 'pending', 'successful'],
      defaultValue: 'pending'
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'purchases',
  });

  return Purchases;
};