// import fruitsRouter from "./fruit";

// export { fruitsRouter };
const express = require("express");
const router = express.Router();
const fruitsRouter = require("./fruit");

router.use(fruitsRouter);

module.exports = router;
