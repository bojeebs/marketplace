const Router = require("express").Router();
const UserRouter = require("./UserRouter");
const ProductRouter = require("./ProductRouter");
// const ShoppingcartRouter = require("./ShoppingCartRouter");
// const AuthRouter = require("./AuthRouter");
const OrderDetailsRouter = require("./OrderdetailsRouter")

Router.use(UserRouter);
Router.use(ProductRouter);
// Router.use(ShoppingcartRouter);
Router.use(OrderDetailsRouter);
// Router.use(AuthRouter);

module.exports = Router;
