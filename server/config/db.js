const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("MongoDB connection failed: ", error);
    process.exit(1);
  }
};
module.exports = connectDB;
