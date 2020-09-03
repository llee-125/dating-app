const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");
require("./models/connection");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("public"));

const apiRoutes = require("./routes/api-routes");

// logs any request
var myLogger = function (req, res, next) {
  console.log(req.path);
  next();
};
app.use(myLogger);
app.use(apiRoutes);

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
