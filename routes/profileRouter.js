const router = require("express").Router();
const auth = require("../middleware/auth");
let db = require("../models/profileModel");

router.get("/test", (req, res) => {
  res.send("Hello, test is working");
});
router.get("/example", (req, res) => {
  res.send("message from back end: this msg");
});
router.get("/all", (req, res) => {
  db.Profile.find().then((profiles) => res.send(profiles));
});

router.get("/find/:id", (req, res) => {
  db.Profile.findById(req.params.id).then((profile) => res.send(profile));
});

router.post("/", auth, async (req, res) => {
  try {
    const { title } = req.body;

    if (!title)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const newTodo = new Todo({
      title,
      userId: req.user,
    });
    const savedTodo = await newTodo.save();
    res.json(savedTodo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// router.get;

module.exports = router;
