const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    // .connect(process.env.DB_URL, {
    .connect(`mongodb://127.0.0.1:27017/E-Commerce`)
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // })
    .then(() => {
      console.log("DB connected successfully");
    })
    .catch((err) => {
      console.log("Error while connecting DB:::", err);
    });
};

module.exports = connectDB;
