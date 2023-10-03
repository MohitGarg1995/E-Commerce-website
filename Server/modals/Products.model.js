const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductsSchema = new Schema({
  name: String,
  category: String,
  rating: Number,
  image: String,
  ratingValue: String,
  price: Number,
});

module.exports = mongoose.model("Product", ProductsSchema);
