const router = require("express").Router();
const auth = require("../middleware/auth");
let db = require("../models/profileModel");
const axios = require("axios");
const jwt = require("jsonwebtoken");
require("dotenv").config();
let userId = "";

router.get("/test", (req, res) => {
  res.send("Hello, test is working");
});

// router.get("/test2", (req, res) => {
//   const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
//   res.json({
//     token,
//     user: {
//       id: user._id,
//       email: user.email,
//     },
//   });
// });

router.get("/all", (req, res) => {
  db.Profile.find().then((profiles) => res.send(profiles));
});

router.get("/find/:id", (req, res) => {
  db.Profile.findById(req.params.id).then((profile) => res.send(profile));
});

router.delete("/remove/:id", (req, res) => {
  db.Profile.findByIdAndRemove(req.params.id).then(() => res.send("success"));
});

router.post("/new", (req, res) => {
  db.Profile.create(req.body).then((profile) => res.send(profile));
});

router.patch("/edit/:id", (req, res) => {
  db.Profile.findByIdAndUpdate(req.params.id, req.body).then((result) =>
    res.send(result)
  );
});

// router.post("/", auth, async (req, res) => {
//   try {
//     const { title } = req.body;

//     if (!title)
//       return res.status(400).json({ msg: "Not all fields have been entered." });

//     const newTodo = new Todo({
//       title,
//       userId: req.user,
//     });
//     const savedTodo = await newTodo.save();
//     res.json(savedTodo);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// router.get;

module.exports = router;
