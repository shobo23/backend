const Express = require('express')
const {getAllUser, getAUser, createUser, updateUser, deleteAUser,deleteAllUser, LoginUser} = require('../controller/userController')

const routes = Express.Router()

// route to get all
routes.get('/users', getAllUser)

// get one user
routes.get('/users/:id', getAUser)

// create user
routes.post('/users/', createUser)

// update us
routes.patch('/users/:id', updateUser)

// delete one user
routes.delete('/users/:id', deleteAUser)

// delete all users
routes.delete('/users/', deleteAllUser)

// login user
routes.post('/users/', LoginUser)


module.exports = routes