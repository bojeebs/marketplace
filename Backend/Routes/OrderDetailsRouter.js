const { GetOrder } = require("../controllers/orderdetailsController");
const Router = require("express").Router();

Router.get("/order", GetOrder);

module.exports = Router;
