const { Product } = require("../models");

const GetProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).send(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "Error", msg: "Unable to fetch Products" });
  }
};

module.exports = {
  GetProducts,
};
