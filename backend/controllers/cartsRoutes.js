import express from "express";
const cartRouter = express.Router();
import User from "../models/userModel.js";
import authorize from "../middleware/auth.js";

//FETCHES USER CART  ==> /api/cart
cartRouter.get("/", authorize, async (req, res) => {
  try {
    if (req.user === undefined || req.user === null) {
      res
        .status(403)
        .json({ errorInfo: "You are not authorized, please login." });
      return;
    }
    res.json(req.user.cartItems);
  } catch (error) {
    console.log(error.messsage);
    res.send(404).json({ errorInfo: error.message });
  }
});

cartRouter.put("/", authorize, async (req, res) => {
  try {
    if (req.user === undefined || req.user === null) {
      res
        .status(403)
        .json({ errorInfo: "You are not authorized, please login." });
      return;
    }
    let updatedUser = await User.findOneAndUpdate(
      // compares cart item product to product id provided if it exist set will be used otherwise addtoset used
      { _id: req.user._id, "cartItems.product": req.body.productId },
      {
        // $inc (increment) adds the provided quantity to current quantity

        $inc: {
          "cartItems.$.quantity": req.body.quantity,
        },
      },
      { new: true }
    ).populate({
      path: "cartItems.product",
      model: "Product",
    });
    //if item not in cart yet
    if (!updatedUser) {
      updatedUser = await User.findOneAndUpdate(
        { _id: req.user._id },
        {
          // allow you to add or update similar to $push
          $addToSet: {
            cartItems: {
              product: req.body.productId,
              quantity: req.body.quantity ? req.body.quantity : 1,
            },
          },
        },
        //new:true gives back updated version and not the old value
        { new: true }
      ).populate({
        path: "cartItems.product",
        model: "Product",
      });
    }
    res.status(201).json(updatedUser);
    return;
  } catch (error) {
    console.log(error.messsage);
    res.status(404).json({ errorInfo: error.message });
  }
});

cartRouter.put("/edit", authorize, async (req, res) => {
  try {
    if (req.user === undefined || req.user === null) {
      res
        .status(403)
        .json({ errorInfo: "You are not authorized, please login." });
      return;
    }
    let updatedUser = await User.findOneAndUpdate(
      // compares cart item product to product id provided if it exist set will be used otherwise addtoset used
      { _id: req.user._id, "cartItems.product": req.body.productId },
      {
        // $set used if item is already in there
        $set: {
          "cartItems.$.quantity": req.body.quantity,
        },
      },
      { new: true }
    ).populate({
      path: "cartItems.product",
      model: "Product",
    });
    res.status(201).json(updatedUser);
  } catch (error) {
    console.log(error.messsage);
    res.status(404).json({ errorInfo: error.message });
  }
});

export default cartRouter;
