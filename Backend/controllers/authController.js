const { User } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { username: req.body.username}, 
      raw: true
    })
    if (
      user && (await middleware.comparePassword(user.password, req.body.password))
    ) {
      let payload = {
        id: user.id,
        firstName: user.firstname,
        lastName: user.lastName,
        username: user.username,
        password: user.password,
        phoneNumber: user.phoneNumber,
        address: user.address,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      }
      let token = middleware.createToken(payload)
      return res.send({user: payload, token})
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized'})
  } catch (error) {
    console.error(error)
    res.status(500).send({ status: 'Error', msg: 'Internal server error'})
  }
}

const Register = async (req, res) => {
  try {
    const { firstName, lastName, email, username, password, phoneNumber, address } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const user = await User.create({ 
    firstName: firstName, lastName: lastName, email: email, username: username, password: passwordDigest, phoneNumber: phoneNumber, address: address })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}
module.exports = {
  Login,
  Register,
  CheckSession
}