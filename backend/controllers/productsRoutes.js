import express from "express";
const router = express.Router();

import Product from "../models/productModel.js";
import User from "../models/userModel.js";
import Order from "../models/orderModel.js";



//FETCHES ALL PRODUCTS  ==> /api/products
router.get("/", async (req, res) => {
  try {
    // .find({}) ====> the {} inside the parentheses means to find ALL items
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.log(error.messsage);
    res.send(404).json({ errorInfo: error.message });
  }
});

//FETCHES SPECIFIC PRODUCT WITH REQ.PARAM.ID  ==> /api/products/:id
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(404);
    res.send(404).json({ errorInfo: error.message });
  }
});

export default router;
