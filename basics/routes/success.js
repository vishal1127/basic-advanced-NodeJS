const router = require("express").Router();
const path = require("path");
const rootDir = require("../util/path");

router.post("/success", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "success.html"));
});

module.exports = router;
