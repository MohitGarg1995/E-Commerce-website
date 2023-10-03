const Product = require("../modals/Products.model");

exports.getProducts = async (req, res) => {
  try {
    const Products = await Product.find();

    res.status(200).send({
      success: true,
      data: Products,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error.message,
    });
  }
};

exports.addProducts = async (req, res) => {
  try {
    const { products } = req.body;
    const addProducts = await Product.insertMany(products);

    res.status(200).send({
      success: true,
      data: addProducts,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

exports.deleteProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProducts = await Product.findByIdAndDelete(id);

    res.status(201).send({
      success: true,
      data: deletedProducts,
    });
  } catch (error) {}
};
