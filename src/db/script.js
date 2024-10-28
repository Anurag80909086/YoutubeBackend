import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDB = async () => {
  try {
    const DB_Response = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log("Mongodb Connected !!");
    // console.log(DB_Response);
  } catch (error) {
    console.log("Unable to Connetct to Database", error);
  }
};

export default connectDB;
