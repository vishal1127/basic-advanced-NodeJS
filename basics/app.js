const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  console.log("inside the middleware");
  res.send(
    '<form action="/products" method="POST"><input type="text" name="product"><input type="text" name="size"><button type="submit">Add Product</button></form>'
  );
});

app.use("/products", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res) => {
  res.send("<h1>Hello from Express JS</h1>");
});

app.listen(3000);
