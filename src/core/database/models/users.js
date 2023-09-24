'use strict';
const {
  Model
} = require('sequelize');
const Purchases = require('./purchases');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(Purchases) {
      Users.hasMany(Purchases)
    }
  }
  Users.init({
    id: DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    createdAt: DataTypes.STRING,
    updatedAt: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  
  return Users;
};