import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI; 
    if (!uri) {
      throw new Error("MONGO_URI not defined");
    }
    await mongoose.connect(uri);
    console.log("Kết nối db thành công");
  } catch (error) {
    console.log("Lỗi kết nối db", error.message);
    process.exit(1);
  }
};
export default connectDB;
