const express = require("express");
const app = express();
const morgan = require("morgan");
// const port = process.env.PORT;
const port = process.env.PORT || 5000;
const connectDB = require("./config/db-connect");

const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

// Database connect
connectDB();

// add logger
app.use(morgan("tiny"));

// add routes
const routes = require("./routes/index");
app.use("/api/v1", routes);

app.listen(port, () => {
  console.log("Server is running on port ::", port);
});
