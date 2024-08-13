const express = require("express");
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;

app.use(express.json());  //json middleware add

//db connection 
require("./config/database").connect();



const user = require("./routes/user");
app.use("/api/v1", user);

// Activate
app.listen(PORT, () => {
  console.log("Server Run at ", PORT);
});