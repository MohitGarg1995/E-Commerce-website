const express = require("express");
const router = express.Router();
const fruitsRouter = require("./fruit");
const ProductsRouter = require("./Products");

router.use(fruitsRouter);
router.use(ProductsRouter);

module.exports = router;
