const express = require('express')
const { createUser, login, getAll, createBlog, getblog, updateBlog, deleteOneBlog } = require('../controller/blogController')
const route = express.Router()

// create user route
route.post('/signUp', createUser)

// login user route
route.post("/login", login)

// get all user route
route.get("/allUsers", getAll)

// create blog
route.post("/post/:id", createBlog)

// get blog
route.get("/allBlogs/:id", getblog)

// update blog
route.post("/updateBlog/:userId/blogId", updateBlog)

// delete one blog
route.delete("/delete/:userId/blogId", deleteOneBlog)


module.exports = route