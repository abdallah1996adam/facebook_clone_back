require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const mongoose = require("mongoose");

const userRouter = require('./api/routes/userRoutes')
const postRouter = require('./api/routes/postRoutes')


const server = express();

//middlewares
server.use(cors());
server.use(morgan("dev"));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(helmet())

//db
// mongoose.connect(
//   process.env.MONGO_URL,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   () => {
//     console.log("connection work");
//   }
// );
//routes
server.use("/api/user",userRouter);
server.use('/api/post', postRouter)


server.listen(process.env.SERVER_PORT, () => {
  console.log(`server is running on port ${process.env.SERVER_PORT}`);
});
