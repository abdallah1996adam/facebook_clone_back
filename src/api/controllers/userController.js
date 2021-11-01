require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");

const User = require("../models/userModel");

exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    
    const user = await newUser.save();
    return res.status(200).json({ message: user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email:email });
    !user &&  res.status(404).json({ message: "user not found !!!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};
