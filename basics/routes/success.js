const router = require("express").Router();
const contactUsController = require("../controllers/contactus");

router.post("/success", contactUsController.postSuccess);

module.exports = router;
