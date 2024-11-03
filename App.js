// app.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./Routes/authRoutes");
const productRoutes = require("./Routes/productRoutes");
const categoryRoutes = require("./Routes/categoryRoutes");
const orderRoutes = require("./Routes/orderRoutes");

const app = express();

connectDB();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/orders", orderRoutes);

module.exports = app;
