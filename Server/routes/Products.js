const express = require("express");
const ProductsRouter = express.Router();

const {
  getProducts,
  addProducts,
} = require("../controllers/Products.controller");

//getProducts
ProductsRouter.route("/products").get(getProducts);
//addProducts
ProductsRouter.route("/products").post(addProducts);

module.exports = ProductsRouter;
