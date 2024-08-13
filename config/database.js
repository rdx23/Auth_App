const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database Connection established");
    })
    .catch((err) => {
      console.log("Connection Issues with Database");
       console.error(err);
      process.exit(1);
    });
};
  