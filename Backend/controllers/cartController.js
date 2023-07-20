const { ShoppingCart } = require("../models");
const shoppingcart = require("../models/shoppingcart");

const GetUserCart = async (req, res, ) => {
  const userId = req.params.userId
  try {
    const shoppingCart = await ShoppingCart.findOne({
      where: {
        userId: userId
      }
    });
    if (!shoppingCart) {
      return res.status(404).json({ status: "Not Found", msg: "Shopping Cart not found for the user" });
    }
    res.status(200).json({ status: "Success", shoppingCart: shoppingCart });
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "Error", msg: "Unable to fetch your Cart" });
  }
}

module.exports = {
  GetUserCart,
}
