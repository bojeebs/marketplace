const { OrderDetails } = require("../models");

const GetOrder = async (req, res) => {
  try {
    const order = await OrderDetails.findAll();
    res.status(200).send(order);
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "Error", msg: "Unable to fetch your Order" });
  }
};

module.exports = {
  GetOrder,
};
