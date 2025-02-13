const Express = require("express");
const mongoose = require("mongoose");
require('dotenv/config')
const app = Express();
app.use(Express.json());

const port = process.env.PORT1;

mongoose
  .connect("mongodb://localhost:27017/docConnect")
  .then(() => {
    console.log("Connected To MongoDB");
  })
  .catch((error) => {
    console.log(`Could not connect ${error}`);
  });

// structure for the user collection
const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
});


const userModel = mongoose.model("docConnectUser", userSchema);
// sign up user
app.post("/SignUp-user", async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      const checkIfUserExist = await userModel.findOne({
        email,
      });
  
      if (checkIfUserExist) {
        res.status(409).json({ message: "user already exist" });
      }
      const user = await userModel.create({ name, email, password });
      res.status(201).json({ status: true, user });
    } catch (error) {
      res.status(500).json({ status: false, error: error.message });
    }
  });


//   show all sign up infos
app.get("/All-user", async (req, res) => {
  try {
    const getAllUsers = await userModel.find();
    res.status(200).json({ status: true, getAllUsers });
  } catch (error) {
    res.status(500).json({ status: false, error: error });
  }
});

// login user to get respective info
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const checkLogin = await userModel.findOne({ email });

    if (!checkLogin || checkLogin.password !== password) {
       res.status(401).json({ message: "invalid email or password" });
    }
    res.status(200).json({
      name: checkLogin.name,
      email: checkLogin.email,
      _id: checkLogin._id,
    });
  } catch (err) {
    res
      .status(500)
      .json({
        status: false,
        message: "An error occurred",
        err: err.message,
      });
  }
});

// show error is the route (url) is invalid
app.all("*", (req, res) => {
  res.status(404).json({
    status: false,
    messaga: "Page does not exist!",
  });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
