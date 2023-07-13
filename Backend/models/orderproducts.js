"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderProducts extends Model {
    static associate(models) {
      OrderProducts.belongsTo(models.Product, { foreignKey: "productId" });
      OrderProducts.belongsTo(models.OrderDetails, {
        foreignKey: "OrderDetailsId",
      });
    }
  }

  OrderProducts.init(
    {
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Product",
          key: "id",
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      sequelize,
      modelName: "OrderProducts",
      tableName: "orderproducts",
    }
  );
  return OrderProducts;
};
