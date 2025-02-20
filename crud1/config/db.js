const mongoose = require("mongoose");
require("dotenv/config");

async function db() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected");
  } catch (error) {
    console.log("error connecting", error);
  }
}

module.exports = db;
