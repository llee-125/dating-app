const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.get("/test", (req, res) => {
  res.send("Hello, test is working");
});

router.post("/register", async (req, res) => {
  try {
    let { email, password, passwordCheck } = req.body;

    if (!email || !password || !passwordCheck)
      return res
        .status(400)
        .json({ msg: "Not all fields have been entered, llee." });

    if (password.length < 5)
      return res.status(400).json({
        msg: "The password needs to be at least 5 characters long, llee.",
      });

    if (password !== passwordCheck)
      return res
        .status(400)
        .json({ msg: "Enter the same password twice for verification, llee." });

    const existingUser = await User.findOne({ email: email });
    if (existingUser)
      return res
        .status(400)
        .json({ msg: "An account with that email already exists, llee." });

    const salt = await bcrypt.genSalt();
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
    console.log(req.body);

    if (!email || !password)
      return res
        .status(400)
        .json({ msg: "Not all fields have been entered, lleelogin." });

    const user = await User.findOne({ email: email });
    if (!user)
      return res.status(400).json({
        msg: "No account with this email has been registered, lleelogin.",
      });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ msg: "Invalid credentials, lleelogin." });

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

router.delete("/delete", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.user);
    res.json(deletedUser);
  } catch ({error: err.message}); 
  }
  });

module.exports = router;
