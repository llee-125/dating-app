const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Back-End Listening at http://localhost: ${PORT}`)
);

app.use("/users", require("./routes/userRouter"));
