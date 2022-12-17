const router = require("express").Router();

router.get("/login", (req, res, next) => {
  res.send(
    '<form onsubmit="localStorage.setItem(`username`,document.getElementById(`username`).value)" action="/login" method="POST"><input id="username" type="text" name="username"><button type="submit">Add Username</button></form>'
  );
});

router.post("/login", (req, res, next) => {
  res.redirect("/");
});
module.exports = router;
