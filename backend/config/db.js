import mongoose from "mongoose";


const connectDB = async () => {
  try {
    const data = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MONGODB Connected:${data.connection.host}`);
  } catch (error) {
    console.log(`Error:${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
