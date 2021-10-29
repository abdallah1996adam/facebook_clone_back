require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");

const User = require("../models/userModel");

exports.register = async (request, response) => {
    console.log(request.body);
    
  try {
   
    return response.status(200).json({ message: "OK" });
  } catch (error) {
    console.log(error);
  }
};
