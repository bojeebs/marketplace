const { ShoppingCart } = require("../models")

const GetUserCart = async (req, res, ) => {
  const userId = req.params.userId
  try {
    const shoppingCart = await ShoppingCart.findOne({
      where: {
        userId: userId
      }
    });
    return shoppingCart;
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "Error", msg: "Unable to fetch your Cart" });
  }
}

module.exports = {
  GetUserCart,
}
