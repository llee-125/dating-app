const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const User = require("../models/userModel");
require("dotenv").config();

router.get("/test", (req, res) => {
  res.send("Hello, test is working");
});

// router.get("/user_data", async (req, res) => {
//   !req.user
//     ? res.json({ message: "No user Present" })
//     : res.json({
//         email: req.user.email,
//         id: req.user._id,
//       });
// });

router.post("/register", async (req, res) => {
  try {
    let { email, password, passwordCheck } = req.body;

    if (!email || !password || !passwordCheck)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    if (password.length < 5)
      return res.status(400).json({
        msg: "The password needs to be at least 5 characters long.",
      });

    if (password !== passwordCheck)
      return res
        .status(400)
        .json({ msg: "Enter the same password twice for verification." });

    const existingUser = await User.findOne({ email: email });
    if (existingUser)
      return res
        .status(400)
        .json({ msg: "An account with that email already exists." });

    // To hide (Hash) password for security purposes using bcrypt with hash and salt
    const salt = await bcrypt.genSalt();

    // returns jiberish
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({ email, password: passwordHash });

    const savedUser = await newUser.save();

    res.json(savedUser);
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const user = await User.findOne({ email: email });
    if (!user)
      return res.status(400).json({
        msg: "No account with this email has been registered.",
      });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// router.delete("/delete", auth, async (req, res) => {
//   try {
//     const deletedUser = await User.findByIdAndDelete(req.user);
//     res.json(deletedUser);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

router.post("/tokenIsValid", async (req, res) => {
  // console.log("Hitting this route");
  try {
    const token = req.header("x-auth-token");
    // console.log(token);
    if (!token) return res.status(401).json({ msg: "No token" });

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) res.status(401).json({ msg: "Cannot verify token" });

    const user = await User.findById(verified.id);
    if (!user) return res.status(404).json({ msg: "User Not Found" });

    return res.json({ email: user.email, id: user._id });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// router.get("/", auth, async (req, res) => {
//   const user = await User.findById(req.user);
//   res.json({ id: user._id });
// });

module.exports = router;
