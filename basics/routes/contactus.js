const router = require("express").Router();
const contactUsController = require("../controllers/contactus");

router.get("/contactus", contactUsController.getContactUs);

module.exports = router;
