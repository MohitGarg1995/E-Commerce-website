const express = require("express");
const fruitsRouter = express.Router();

const {
  getFruits,
  addFruits,
  updateFruit,
  deleteFruit,
} = require("../controllers/fruits.controller");
// get fruits
fruitsRouter.route("/fruits").get(getFruits);

// add fruits
fruitsRouter.route("/fruits").post(addFruits);

// update fruits
fruitsRouter.route("/fruits/:id").put(updateFruit);

// delete fruits
fruitsRouter.route("/fruits/:id").delete(deleteFruit);

module.exports = fruitsRouter;
