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
    cartItems: [
      cartItemSchema,
      // { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Product" },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
