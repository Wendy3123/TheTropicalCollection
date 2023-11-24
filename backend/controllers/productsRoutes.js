import express from "express";
const router = express.Router();
import Product from "../models/productModel.js";

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

// 'ADD Product ROUTE'
router.post("/", (req, res) => {
  console.log(req.body);
  db.Product.create(req.body)
    .then((createdProduct) => {
      res.json(createdProduct);
    })
    .catch((err) => {
      console.log("err", err);
      res.status(500).json({ error: "An error occurred" });
    });
});

//Edit Product Route
router.put("/:id", (req, res) => {
  console.log(req.body);
  db.Product.findByIdAndUpdate(req.params.id, req.body)
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      console.log("err", err);
      res.status(500).json({ error: "An error occurred" });
    });
});

// Delete Product
router.delete("/:id", (req, res) => {
  db.Product.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json(" deleted");
    })
    .catch((err) => {
      console.log("err", err);
      res.status(500).json({ error: "An error occurred" });
    });
});
export default router;
