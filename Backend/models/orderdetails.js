"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OrderDetails.belongsToMany(models.Product, {
        through: "OrderProducts",
      });
      OrderDetails.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  OrderDetails.init(
    {
      orderdetailId: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "OrderDetails",
      tableName: "orderdetails",
    }
  );
  return OrderDetails;
};
