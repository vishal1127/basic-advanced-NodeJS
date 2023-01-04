const express = require("express");
const router = express.Router();

const productControllers = require("../controllers/products");

router.get("/getProducts", productControllers.getProducts);

router.get("/getProduct/:prodId", productControllers.getProduct);

router.post("/addProduct", productControllers.addProduct);

module.exports = router;
