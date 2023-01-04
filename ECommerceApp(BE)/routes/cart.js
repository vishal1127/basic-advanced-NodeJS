const express = require("express");
const router = express.Router();

const cartControllers = require("../controllers/cart");

router.get("/getCart", cartControllers.getCart);

router.post("/addToCart", cartControllers.addToCart);

module.exports = router;
