// const express = require("express");
// const mongoose = require("mongoose");
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/datingApp";
// const cors = require("cors");
// require("dotenv");

// const app = express();
// app.use(express.json());
// app.use(cors());

// mongoose.connect(
//   MONGODB_URI,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//   },
//   (err) => {
//     if (err) throw err;
//     console.log("MongoDB connection established, llee.");
//   }
// );

// const PORT = process.env.PORT || 5000;

// app.use("/users", require("./routes/userRouter"));
// app.use("/api", require("./routes/api-routes"));

// app.listen(PORT, () =>
//   console.log(`Back-End Listening at http://localhost: ${PORT}`)
// );
