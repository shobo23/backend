const taskManagerModel = require("../model/taskManagerModel");
const bcrypt = require("bcrypt");

const handleError = (res, error) => {
  return res.status(500).json({
    message: "An error occured",
    error: error.message || error.message,
  });
};

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

module.exports = { register, loginUser };
