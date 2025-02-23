const { model, Schema } = require("mongoose")


// structure for the user and blog
const blogSchema = new Schema({
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
})

module.exports = blogModel = model("blogs", blogSchema)