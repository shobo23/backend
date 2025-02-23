const express = require('express')
const { createUser } = require('../controller/blogController')
const route = express.Router()

// create user route
route.post('/signUp', createUser)


module.exports = route