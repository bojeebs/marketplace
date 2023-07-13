"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CartProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CartProduct.belongsTo(models.Product, { foreignKey: "productId" });
      CartProduct.belongsTo(models.ShoppingCart, {
        foreignKey: "shoppingcartId",
      });
    }
  }
  CartProduct.init(
    {
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Product",
          key: "id",
        },
      },
      shoppingcartId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "ShoppingCart",
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
      modelName: "CartProduct",
      tableName: "cartproduct",
    }
  );
  return CartProduct;
};
