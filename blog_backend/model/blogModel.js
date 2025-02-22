const { Schema, model } = require("mongoose");

// user structure
const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    blogs: [
    {
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
    }
    ]
   
});

module.exports = userModel = model("user_and_blogs", userSchema);