const express = require("express");
const router = express.Router();

const productControllers = require("../controllers/products");

router.get("/getProducts", productControllers.getProducts);

router.post("/addProduct", productControllers.addProduct);

module.exports = router;
