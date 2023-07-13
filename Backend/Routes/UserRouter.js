const { GetUsers } = require("../controllers/userController");
const Router = require("express").Router();
// const middleware = require("..Middleware/index");

Router.get("/users", GetUsers);

module.exports = Router;
