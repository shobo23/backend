const blogModel = require("../Model/blogModel");
const bcrypt = require("bcrypt");

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
    const { username, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    // check if user exist
    const doesUserExist = await blogModel.findOne({ email });
    if (doesUserExist) {
      return res.status(400).json({ mesage: "user already exist" });
    }
    const theUser = await blogModel.create({
      username,
      email,
      password: hashPassword,
      blogs: [],
    });
    return res
      .status(201)
      .json({ status: true, massage: "Account Created✔", data: theUser });
  } catch (error) {
    handleError(res, error);
  }
};

// get all users
const getAll = async (req, res) => {
  try {
    const allUsers = await blogModel.find();
    return res.status(200).json({ status: true, datas: allUsers });
  } catch (error) {
    handleError(res, error);
  }
};

// login users and show all details
const login = async (res, req) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res
        .status(400)
        .json({ status: false, message: "All fields are required" });
    }

    // check user if user exists
    const user = await blogModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid details" });
    }

    // check password
    const doesPwdMatch = await bcrypt.compare(hashPassword, user.password);
    if (!doesPwdMatch) {
      return res.status(400).json({ message: "Invalid details" });
    }

    res.status(200).json({ status: true, blogs: user.blogs });
  } catch (error) {
    handleError(res, error);
  }
};

// create blog
const createBlog = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      res.status(404).json({ status: false, message: "User not found" });
    }
    const { title, content } = req.body;
    const theUser = await blogModel.findById(id);
    theUser.blogs.push({ title, content });

    res
      .status(201)
      .json({ status: true, message: "Blog created successfully" });
  } catch (error) {
    handleError(res, error);
  }
};

// get blogs
const getblog = async (req, res) => {
  try {
    const theUser = await blogModel.findById(req.params.id);
    if (!theUser) {
      return res.status(404).json({ status: false, message: "User not found" });
    }
  } catch (error) {
    handleError(res, error);
  }
};

// update blog
const updateBlog = async (req, res) => {
  try {
    const theUser = await User.findById(req.params.userId);
    if (!theUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const blog = theUser.blogs.id(req.params.blogId);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }


  } catch (error) {
    handleError(res, error);
  }
};

// delete one blog by Id
const deleteOneBlog = async (req,res) => {
    try {
        const {userId, blogId} = req.params
        const theUser = await blogModel.findById(userId)
        if (!theUser) {
            return res.status(404).json({status:false, message:"User not found"})
        }

        const theBlog = await blogModel.findOneAndDelete(blogId)
        if (!theBlog) {
            return res.status(404).json({status:false, message:"Blog does not exist"})
        }

        return res.status(200).json({status:true, message:"Blog deleted"})
    } catch (error) {
        handleError(res, error)
    }

}

// delete all blog

module.exports = { createUser, getAll, login, createBlog, getblog, updateBlog, deleteOneBlog };
