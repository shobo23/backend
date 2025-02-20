const { Router } = require("express");
const { register, loginUser, addTask, updateTask } = require("../controller/userController");

const router = Router();

// create user 
router.post("/auth/register", register);

// login user
router.post("/auth/login", loginUser);

// add task
router.post("/auth/addTask/:id", addTask)

// update task
router.patch("/auth/updateTask/:id", updateTask)

module.exports = router;
