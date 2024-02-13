const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Import all routes
const products = require("./routes/product.js");
app.use("/api", products);

module.exports = app;
