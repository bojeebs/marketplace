const Router = require('express').Router()
const controller = require('../controllers/authController')
const middleware = require ('../middleware/index')


Router.post('/login', controller.Login)
Router.post('/register', controller.Register)

Router.get('/session', 
middleware.stripToken,
middleware.verifyToken,
controller.CheckSession)



module.exports = Router