import express from "express";
const userRouter = express.Router();
import bcrypt from "bcrypt";
import User from "../models/userModel.js";

//add a user

userRouter.post("/", async (req, res) => {
  let { password, ...rest } = req.body;
  const user = await User.create({
    ...rest,
    password: await bcrypt.hash(password, 12),
  });
  res.json(user);
});
userRouter.get("/", async (req, res) => {
  try {
    // .find({}) ====> the {} inside the parentheses means to find ALL items
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.log(error.messsage);
    res.send(404).json({ errorInfo: error.message });
  }

  res.json(user);
});

userRouter.get("/", async (req, res) => {
  try {
    // .find({}) ====> the {} inside the parentheses means to find ALL items
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.log(error.messsage);
    res.send(404).json({ errorInfo: error.message });
  }
});

export default userRouter;

// add to cart
