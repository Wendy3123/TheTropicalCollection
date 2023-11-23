import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: "User",
    // },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      default: "Dried Fruits",
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    // quantity: {
    //   type: Number,
    //   required: true,
    //   default: 1,
    // },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
