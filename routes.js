const express = require("express");
const {
  getAllProducts,
  addProduct,
  getAllCartProducts,
  deleteCartProduct,
} = require("./controller/all-products.controller");
const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/cart-products").get(getAllCartProducts);
router.route("/add-to-cart").post(addProduct);
router.route("/remove-cart-product").delete(deleteCartProduct);

module.exports = router;
