"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OrderHistory.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  OrderHistory.init(
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
    },
    {
      orderId: DataTypes.INTEGER,
      orderDate: DataTypes.STRING,
      orderTotal: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "OrderHistory",
    }
  );
  return OrderHistory;
};
