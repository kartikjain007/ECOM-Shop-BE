// controllers/orderController.js
const Order = require("../models/Order");
const Product = require("../models/Product");

exports.createOrder = async (req, res) => {
  const { userId, products } = req.body;

  try {
    const productDetails = await Promise.all(
      products.map(async (product) => {
        const productData = await Product.findById(product.productId);
        return {
          productId: product.productId,
          quantity: product.quantity,
          cost: productData.cost,
        };
      })
    );

    const totalCost = productDetails.reduce(
      (sum, product) => sum + product.cost * product.quantity,
      0
    );

    const newOrder = new Order({ userId, products: productDetails, totalCost });
    await newOrder.save();

    res.status(201).json(newOrder);
  } catch (error) {
    console.error("Error processing order:", error);
    res.status(500).json({ error: "Error processing order" });
  }
};
