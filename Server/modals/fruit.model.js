const mongoose = require("mongoose");
const { Schema } = mongoose;

const fruitSchema = new Schema({
  name: String,
  color: String,
  quantity: Number,
});

module.exports = mongoose.model("Fruit", fruitSchema);
