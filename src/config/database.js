import config from "./env";
import mongoose from "mongoose";

const db = () => {
  mongoose.connect(
    config.mongo_url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("connected to database");
    }
  );
};

export default db
