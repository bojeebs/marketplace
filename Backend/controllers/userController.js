const { User } = require("../models");

const GetUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).json({ status: "Error", msg: "Unable to fetch users" });
  }
};

module.exports = {
  GetUsers,
};
