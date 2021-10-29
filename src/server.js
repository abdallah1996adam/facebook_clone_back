require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const mongoose = require("mongoose");

const router = require("./api/routes");

const server = express();

server.use(cors());
server.use(morgan("dev"));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

//db
// mongoose.connect(
//   process.env.MONGO_URL,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   () => {
//     console.log("connection work");
//   }
// );

server.use(router);

server.listen(process.env.SERVER_PORT, () => {
  console.log(`server is running on port ${process.env.SERVER_PORT}`);
});
