const { json } = require("express");
const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");

// show all users
const getAllUser = async (req, res) => {
  try {
    const allUser = await userModel.find();
    return res.status(201).json({ data: allUser });
  } catch (error) {
    return res.status(500).json({ message: "An error occured" });
  }
};

// show one user by id
const getAUser = async (req, res) => {
  try {
    const theUser = await userModel.findById(req.params.id);
    if (theUser) {
      res.status(200).json({ status: true, theUser });
    } else {
      res.status(404).json({ status: false, message: "user does not exist" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, error });
  }
};

// create a user
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const ifUserAlreadyExist = await userModel.findOne({ email });
    if (ifUserAlreadyExist) {
      return res.status(401).json({ message: "user already exist" });
    }
    const createTheUser = await userModel.create({
      name,
      email,
      password: hashPassword,
    });
    return res
      .status(201)
      .json({ message: "user created", data: createTheUser });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "An error occured", error: error.message });
  }
};

// login user to show details
// const LoginUser = async (req,res) => {
//     try {
//         const {email, password} = req.body
//         const checkLogin = await userModel.findOne({email})

//         if () {

//         }
//     } catch (error) {

//     }
// }

// update user details
const updateUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10)

    const updateUser = await userModel.findByIdAndUpdate(
      req.params.id,
      {
        name,
        email,
        password: hashPassword,
      },
      { new: true }
    );

    if (!updateUser) {
      res.status(404).json({ message: "user does not exist" });
    }

    res.status(200).json({ status: true, user: updateUser });
  } catch (error) {
    res.status(500).json({ status: false, error: error.message });
  }
};

// delete a user
const deleteAUser = async (req, res) => {
    try {
        const theUser = await userModel.findByIdAndDelete(req.params.id)
        if (!theUser) {
            res.status(404).json({status: false, message: "user does not exist"})
        }
        res.status(200).json({status:true, message:"user deleted successfully"})
    } catch (error) {
        res.status(500).json({status:false, message:error})
    }
}

module.exports = { getAllUser, getAUser, createUser };
