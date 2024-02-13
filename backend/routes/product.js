const express = require("express");
const router = express.Router();

const {
  getProducts,
  createProducts,
  updateProducts,
} = require("../controllers/productController");

router.route("/products").get(getProducts);
router.route("/addProduct").post(createProducts);
router.route("/updateProduct/:id").put(updateProducts);

module.exports = router;
