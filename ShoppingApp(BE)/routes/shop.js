const path = require("path");

const express = require("express");

const shopController = require("../controllers/shop");
const { route } = require("./admin");

const router = express.Router();

router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);

router.get("/products/:productId", shopController.getProduct);

router.get("/cart", shopController.getCart);

router.post("/cart", shopController.postCart);

router.post("/create-order", shopController.postOrder);

router.post("/cart-delete-item", shopController.postCartDelete);

router.get("/orders", shopController.getOrders);

router.get("/checkout", shopController.getCheckout);

module.exports = router;
