const { Router } = require("express");
const { register, loginUser, addTask, updateTask } = require("../controller/userController");

const router = Router();

// create user 
router.post("/auth/register", register);

// login user
router.post("/auth/login", loginUser);

// add task
router.post("/auth/addTask", addTask)

// update task
router.post("/auth/updateTask", updateTask)

module.exports = router;
