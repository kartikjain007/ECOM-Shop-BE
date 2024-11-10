const express = require("express");
const productController = require("../Controllers/productController");

const router = express.Router();

router.post("/", productController.createProduct);

router.get("/", productController.getAllProducts);

router.get("/:productId", productController.getProductById);

router.get("/category/:categoryId", productController.getProductsByCategory);

module.exports = router;
