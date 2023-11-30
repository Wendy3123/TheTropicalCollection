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
//get user 
userRouter.get("/:id", (req, res) => {
  User.findById(req.params.id)
  .populate({
    path: 'cartItems.product',
    model: 'Product',
  })
    .then((user) => {
    ;
      res.json(user);
    })
    .catch((err) => {
      console.log("err", err);
      res.status(500).json({ error: "An error occurred" });
    });
});

// add to cart- update quantity
userRouter.post("/:id/cart/:productId", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate("cartItems")
    const product = await Product.findById(req.params.productId);
    
    const updatedQuantity=req.body.quantity
       
    const existingCartItem = user.cartItems.find(
      (item) => item.product.toString() === product._id.toString()
    );

    if (existingCartItem) {
      existingCartItem.quantity = updatedQuantity;
    } else {
    
       user.cartItems.push({
        product: req.params.productId,
        quantity: updatedQuantity,
      });
    }
 
    await user.save();
  
    res.json(user.cartItems);
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ error: "An error occurred" });
  }
});

userRouter.put("/:id", async (req, res) => {
  try {
   //address
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

    let updateObject = {};

    // move order to old orders
    if (updatedUser.orderItems.length > 0) {
      updateObject = {
        $push: { oldOrders: { $each: updatedUser.orderItems } },
        $set: { orderItems: [] }, // Empty the current orderItems array
      };

      const updatedUserWithOldOrders = await User.findByIdAndUpdate(
        req.params.id,
        updateObject,
        { new: true }
      );

      return res.json(updatedUserWithOldOrders);
    }

   // empty  cart to orders
    const cartItems = updatedUser.cartItems.map(item => ({
      product: item.product,
      quantity: item.quantity,
    }));

    updateObject = {
      $push: { orderItems: { $each: cartItems } },
      $set: { cartItems: [] }, // Empty the cart array
    };

    const updatedUserWithOrders = await User.findByIdAndUpdate(
      req.params.id,
      updateObject,
      { new: true }
    );

    res.json(updatedUserWithOrders);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "An error occurred" });
  }
});

// create an endpoint that updates the user cart propertry(add/delete/update )

// create an ednpoint that grabs the users cart using the userID (you will getback the product ID and
//  and quantity from their you will use the product ID to get the specific product from the product collectioni
//  **alternatively you can do this all at once with the use of mongoose schema references/relationships)



export default userRouter;
