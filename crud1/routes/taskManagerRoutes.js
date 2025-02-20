const { Router } = require("express");
const { register, loginUser } = require("../controller/userController");

const router = Router();

router.post("/auth/register", register);
router.post("/auth/login", loginUser);

module.exports = router;
