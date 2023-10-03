const express = require("express");
const ProductsRouter = express.Router();

const {
  getProducts,
  addProducts,
  deleteProducts,
} = require("../controllers/Products.controller");

//getProducts
ProductsRouter.route("/products").get(getProducts);
//addProducts
ProductsRouter.route("/products").post(addProducts);
//deleteProducts
ProductsRouter.route("/products/:id").delete(deleteProducts);

module.exports = ProductsRouter;
