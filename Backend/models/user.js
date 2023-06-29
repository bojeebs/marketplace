"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.ShoppingCart, { foreignKey: "userId" });
      User.hasMany(models.OrderHistory, { foreignKey: "userId" });
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      tableName: "user",
    }
  );
  return User;
};
