const { GetUsers } = require("../controllers/userController");
const Router = require("express").Router();
// const middleware = require("..Middleware/index");

Router.get("/users");

module.exports = Router;
