const { GetProducts } = require("../controllers/productController");
const Router = require("express").Router();

Router.get("/products", GetProducts);

module.exports = Router;
