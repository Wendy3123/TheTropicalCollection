import express from "express";
const userRouter = express.Router();
import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import Product from "../models/productModel.js";

//show users
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
//add users
userRouter.post("/", async (req, res) => {
  let { password, ...rest } = req.body;
  const user = await User.create({
    ...rest,
    password: await bcrypt.hash(password, 12),
  });
  res.json(user);
});
//RW: please do  not delete yet these commented routes
// userRouter.get("/:id", (req, res) => {
//   User.findById(req.params.id)
//     .populate("cartItems")
//     .then((user) => {
//     ;
//       res.json(user);
//     })
//     .catch((err) => {
//       console.log("err", err);
//       res.status(500).json({ error: "An error occurred" });
//     });
// });
// // add to cart- delete if already exists
// userRouter.post("/:id/cart/:productId", async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id).populate("cartItems")
//     const product = await Product.findById(req.params.productId);
//     // const index = user.cartItems.findIndex(item => item.product(product._id))
//     const updatedQuantity=req.body.quantity
//     const updatedName=req.body.name

//     console.log(`updated quantity ${updatedQuantity} ${updatedName}`)
//     //if item already exists on the cart we want to delete it before adding new cartitem
//      if (user.cartItems.includes(product._id)){
//      user.cartItems.pop(product._id);
//      await user.save();
//     }
//      //after delelting we want to push new item to cart
   
//     user.cartItems.push(product._id);
//     await user.save();

//     // User.findByIdAndUpdate(req.params.id, user.cartItems(req.body))
//     await user.save();
//     res.json(user.cartItems);
//   } catch (err) {
//     console.log("err", err);
//     res.status(500).json({ error: "An error occurred" });
//   }
// });


//delete one
// userRouter.delete("/:id/cart/single/:productId", async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     const product = await Product.findById(req.params.productId);
//     user.cartItems.pop(product._id);
//     await user.save();
//     res.json(user.cartItems);
//   } catch (err) {
//     console.log("err", err);
//     res.status(500).json({ error: "An error occurred" });
//   }
// });
// create an endpoint that updates the user cart propertry(add/delete/update )

// create an ednpoint that grabs the users cart using the userID (you will getback the product ID and
//  and quantity from their you will use the product ID to get the specific product from the product collectioni
//  **alternatively you can do this all at once with the use of mongoose schema references/relationships)

export default userRouter;
