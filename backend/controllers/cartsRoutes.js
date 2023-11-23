import express from "express";
const router = express.Router();
import User from "../models/userModel.js";
import authorize from "../middleware/auth.js";

//FETCHES USER CART  ==> /api/cart
router.get("/", authorize, async (req, res) => {
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

router.put("/", authorize, async (req, res) => {
  try {
    if (req.user === undefined || req.user === null) {
      res
        .status(403)
        .json({ errorInfo: "You are not authorized, please login." });
      return;
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      {
        $push: {
          cartItems: req.body.productId,
        },
      },
      { new: true }
    ).populate("cartItems");
    res.status(201).json(updatedUser);
    return;
  } catch (error) {
    console.log(error.messsage);
    res.status(404).json({ errorInfo: error.message });
  }
});

export default router;
