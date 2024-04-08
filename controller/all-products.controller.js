const products = require("../model/allProduct");
const cart = require("../model/cartProduct");

// get all products
const getAllProducts = async (req, res) => {
  const getProducts = await products.find();
  res.status(200).json({ getProducts });
};

// get product by id
const getProductById = async (req, res) => {
  const productId=req.params.id
  const getProduct = await products.findById(productId);
  res.status(200).json({ getProduct });
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
  console.log("delete", req.body.delItemId);
  const id = req.body.delItemId;
  const cartProduct = await cart.findByIdAndDelete(id);
  res.status(200).json({ cartProduct });
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  getAllCartProducts,
  deleteCartProduct,
};
