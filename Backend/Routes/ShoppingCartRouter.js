const { GetUserCart } = require("../controllers/cartController")
const Router = require("express").Router();

Router.get('/shoppingcart/:userId', GetUserCart)

module.exports = Router