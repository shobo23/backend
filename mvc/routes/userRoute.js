const Express = require('express')
const {getAllUser, getAUser, createUser} = require('../controller/userController')

const routes = Express.Router()

// route to get all
routes.get('/users', getAllUser)

// get one user
routes.get('/users/:id', getAUser)

// create user
routes.post('/users/', createUser)


module.exports = routes