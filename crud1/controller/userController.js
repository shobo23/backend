const taskManagerModel = require("../model/taskManagerModel");
const bcrypt = require("bcrypt");

const handleError = (res, error) => {
  return res.status(500).json({
    message: "An error occured",
    error: error.message || error.message,
  });
};

// create user and empty task array
const register = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    if (!password || !email) {
      return res.status(400).json({ message: "all field is required" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const createUser = await taskManagerModel.create({
      userName,
      email,
      password: hashPassword,
      task: [],
    });

    return res.status(200).json({ succes: true, data: createUser });
  } catch (error) {
    console.log(error);

    handleError(res, error);
  }
};

// login user to view data
async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const findUser = await taskManagerModel.findOne({ email });
    if (!findUser) {
      return res.status(404).json({ message: "invalid email or password" });
    }
    const checkPas = await bcrypt.compare(password, findUser?.password);
    if (!checkPas) {
      return res.status(404).json({ message: "invalid email or password" });
    }

    return res.status(201).json({ success: true, findUser });
  } catch (error) {
    handleError(res, error);
  }
}

// add task to respective id
const addTask = async (req, res) => {
  try {
    const id = req.params.id;

    const { title, description } = req.body;
    // check for empty fields
    if (!title || !description) {
      res
        .status(400)
        .json({ status: false, message: "All fields are required" });
    }

    const user = await taskManagerModel.findById(id);
    if (!user) {
      res.status(404).json({ message: "user not found" });
    }
    // pushe the submitted task array to user task array
    user.task.push({ title, description, completed });
    res
      .status(200)
      .json({ status: true, message: "task add ✔", added_task: user });
  } catch (error) {
    handleError(res, error);
  }
};

// update task by id
const updateTask = async (req, res) => {
  try {
    const { id } = req.params.id;
    const { title, description, complete } = req.body;

    if (!title || !description || !complete) {
      res
        .status(400)
        .json({ status: false, message: "all fields are required!" });
    }

    const user = await taskManagerModel.findById(id);
    if (!user) {
      res.status(404).json({status:false, message:"user not found"})
    }
    if(title) task.title = table
    if(description) task.description = description
    if(complete) task.complete = complete

    res.status(200).json({status:true, message:"task updated ✔", info:user})
  } catch (error) {
    handleError(res, error)
  }
};

module.exports = { register, loginUser };
