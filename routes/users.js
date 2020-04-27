const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.send({ message: "working" });
});

module.exports = router;
