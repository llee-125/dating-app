const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const path = require("path");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/profile";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/users", require("./routes/userRouter"));
app.use("/profile", require("./routes/profileRouter"));

// logs any request
var myLogger = function (req, res, next) {
  console.log(req.path);
  next();
};
app.use(myLogger);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

mongoose.connect(
  MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established.");
  }
);

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
