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

// exports.addProducts = async (req, res) => {
//   try {
//     const { products } = req.body;

//     // console.log("aaaaaa", products);

//     // if (!(Array.isArray(products) && products.length < 0)) {
//     //   throw new Error("Please add some products");
//     // }

//     // add products to db
//     const updatedProducts = await Product.insertMany(products);

//     if (updatedProducts) {
//       res.status(201).send({
//         success: true,
//         fruits: updatedProducts,
//       });
//     }
//   } catch (error) {
//     res.status(500).send({
//       success: false,
//       error: error.message,
//     });
//   }
// };
