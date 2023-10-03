const Fruit = require("../modals/fruit.model");

exports.getFruits = async (req, res) => {
  try {
    const fruits = await Fruit.find();

    res.status(200).send({
      success: true,
      data: fruits,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message,
    });
  }
};

exports.addFruits = async (req, res) => {
  try {
    const { fruits } = req.body;

    console.log("aaaaaa", req);

    if (!(Array.isArray(fruits) && fruits.length < 0)) {
      throw new Error("Please add some fruits");
    }

    // add fruits to db
    const updatedFruits = await Fruit.insertMany(fruits);

    // if fruits are added, then fetch the fruits and send in response
    if (updatedFruits) {
      res.status(201).send({
        success: true,
        fruits: updatedFruits,
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message,
    });
  }
};

exports.updateFruit = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      throw new Error("Please send fruit id");
    } else if (!Object.keys(req.body).length) {
      throw new Error("Please add data to update");
    }

    const updatedFruit = await Fruit.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (updatedFruit) {
      res.status(201).send({
        success: true,
        data: updatedFruit,
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message,
    });
  }
};

exports.deleteFruit = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new Error("Fruit id not shared");
    }
    const deletedFruit = await Fruit.findByIdAndDelete(id);
    if (deletedFruit) {
      res.status(201).send({
        success: true,
        data: deletedFruit,
      });
    }
  } catch (error) {}
};
