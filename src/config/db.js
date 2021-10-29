require("dotenv").config();
const mongoose = require("mongoose");

const db = mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connection work");
  }
);

module.exports = db;
