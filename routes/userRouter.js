const router = require("express").Router();

router.get("/test", (req, res) => {
  res.send("Hello, test is working");
});

module.exports = router;
