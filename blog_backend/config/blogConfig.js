const mongoose = require("mongoose");
require("dotenv/config");

async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected");
  } catch (error) {
    console.log("error connecting", error);
  }
}

module.exports = connectDb;
