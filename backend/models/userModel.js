import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    default: 1,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Product",
  },
});
const orderItemSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    default: 1,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Product",
  },
});

const oldOrderSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    default: 1,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Product",
  },
});

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    address:{
      type: String,
      // default:"123 Main Street",
      // required: true,
    },
    city:{
      type: String,
      // default:"Yahoopitzville",
      // required: true,
    },
    state:{
      type: String,
      // default:"PP",
      // required: true,

    },
    zip:{ 
      type: String,
      // default:"12345",
    //  required: true,
    },
    phone:{
      type: String
      // default:"123-456-7891",
      // required: true,
    },
    cartItems: [
      cartItemSchema,
      // { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Product" },
    ],
    orderItems: [
      orderItemSchema,
      // { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Product" },
    ],
    oldOrders: [
      oldOrderSchema,
      // { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Product" },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
