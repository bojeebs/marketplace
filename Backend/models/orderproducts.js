"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OrderProducts.belongsTo(models.Product, { foreignKey: "productId" });
      OrderProducts.belongsTo(models.OrderDetails, {
        foreignKey: "OrderDetailsId",
      });
    }
  }

  OrderProducts.init(
    {
      quantity: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    {
      sequelize,
      modelName: "OrderProducts",
      tableName: "orderproducts",
    }
  );
  return OrderProducts;
};
