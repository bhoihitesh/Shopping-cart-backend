const mongoose = require("mongoose");

const cartProductsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name must be provided"],
  },
  type: {
    type: String,
    required: [true, "Product type must be provided"],
  },
  category: {
    type: String,
    required: [true, "Product category must be provided"],
  },
  img: {
    type: String,
    required: [true, "Product image must be provided"],
  },
  price: {
    type: Number,
    required: [true, "Product price must be provided"],
  },
  discount: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("cart", cartProductsSchema);
