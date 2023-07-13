"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ShoppingCart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ShoppingCart.belongsTo(models.User, { foreignKey: "userId" });
      ShoppingCart.belongsToMany(models.Product, { through: "CartProduct" });
    }
  }
  ShoppingCart.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
          model: "user",
          key: "id",
        },
      },
      cartId: {
        type: DataTypes.INTEGER,
      },
      price: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "ShoppingCart",
      tableName: "shoppingcart",
    }
  );
  return ShoppingCart;
};
