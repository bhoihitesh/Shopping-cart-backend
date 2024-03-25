const products = require("../model/allProduct");
const cart = require("../model/cartProduct");

// get all products
const getAllProducts = async (req, res) => {
  const getProducts = await products.find();
  res.status(200).json({ getProducts });
};

// get all cart products
const getAllCartProducts = async (req, res) => {
  const getCartProducts = await cart.find();
  res.status(200).json({ getCartProducts });
};

// insert product to cart
const addProduct = async (req, res) => {
  const cartProduct = await cart.insertMany(req.body.item);
  res.status(200).json({ cartProduct });
};

// delete product from cart
const deleteCartProduct = async (req, res) => {
  console.log("delete", req.body);
  const cartProduct = await cart.deleteOne(req.body.item);
  res.status(200).json({ cartProduct });
};

module.exports = {
  getAllProducts,
  addProduct,
  getAllCartProducts,
  deleteCartProduct,
};
