import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const DBconnect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MONGOBD Connected:${DBconnect.connect.host}`);
  } catch (error) {
    console.log(`Error:${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
