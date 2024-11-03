// routes/categoryRoutes.js
const express = require("express");
const { getAllCategories } = require("../Controllers/categoryController");

const router = express.Router();

router.get("/", getAllCategories);

module.exports = router;
