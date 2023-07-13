const Router = require("express").Router();
const UserRouter = require("./UserRouter");
const ProductRouter = require("./ProductRouter");
const ShoppingcartRouter = require("./ShoppingCartRouter");
const OrderDetailsRouter = require("./OrderDetailsRouter");
const AuthRouter = require("./AuthRouter");

Router.use(UserRouter);
Router.use(ProductRouter);
Router.use(ShoppingcartRouter);
Router.use(OrderDetailsRouter);
Router.use(AuthRouter);

module.exports = Router;
