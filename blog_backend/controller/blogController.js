const blogModel = require('../Model/blogModel')
const bcrypt = require('bcrypt')


// error handler 
const handleError = (res, error) => {
    return res.status(500).json({
      message: "An error occured",
      error: error.message || error.message,
    });
  };

// create user
const createUser = async (req, res) => {
    try {
        const {username, email, password} = req.body
        const hashPassword = await bcrypt.hash(password, 10)
        // check if user exist
        const doesUserExist = await blogModel.findOne({email})
        if (doesUserExist) {
            return res.status(400).json({mesage:'user already exist'})
        }
        const theUser = await blogModel.create({username, email, password:hashPassword, task:[]})
        return res.status(201).json({status:true, massage:'Account Created✔', data: theUser})
    } catch (error) {
        handleError(res, error)
    }
}

// get all users
const getAll = async (req, res) => {
    try {
        const allUsers = await blogModel.find()
        return res.status(200).json({status:true, datas:allUsers})
    } catch (error) {
        handleError(res, error)
    }
}

// login users and show all details
const login = async (res, req) => {
    try {
        const {email, password} = req.body
        
    } catch (error) {
        handleError(res, error)
    }
}

module.exports = {createUser, }