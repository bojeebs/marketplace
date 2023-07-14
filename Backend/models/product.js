"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsToMany(models.ShoppingCart, { through: "CartProduct" });
      Product.belongsToMany(models.OrderDetails, { through: "OrderProduct" });
    }
  }
  Product.init(
    {
      productDescription: DataTypes.STRING,
      productPrice: DataTypes.INTEGER,
      imageUrl: DataTypes.STRING(255),
    },
    {
      sequelize,
      modelName: "Product",
      tableName: "product",
    }
  );
  return Product;
};
