const express = require("express");

const userController = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post("/register", userController.register);
userRouter.post("/login", userController.login);

module.exports = userRouter;
