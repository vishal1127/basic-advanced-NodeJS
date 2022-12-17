const router = require("express").Router();
const fs = require("fs");
router.get("/", (req, res, next) => {
  fs.readFile("./chat.txt", "utf8", (err, data) => {
    if (err) console.log("Error reading from file", err);
    res.send(
      `<p>${data}<br><form action="/" method="POST" onSubmit="document.getElementById('username').value=localStorage.getItem('username')"><input type="text" name="message" id="message"><input type="hidden" name="username" id="username"><button type="submit">Send message</button></form>`
    );
  });
});

router.post("/", (req, res, next) => {
  fs.writeFile(
    "./chat.txt",
    `${req.body.username}:${req.body.message}`,
    { flag: "a" },
    (err) => {
      if (err) console.log("Error writing to file", err);
    }
  );
  res.redirect("/");
});
module.exports = router;
