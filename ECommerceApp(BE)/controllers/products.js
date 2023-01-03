const Product = require("../models/products");

exports.getProducts = (req, res, next) => {
  Product.findAll().then((result) => {
    res.json(result);
  });
};

exports.addProduct = (req, res, next) => {
  const name = req.body.name;
  const imgUrl = req.body.imgUrl;
  const price = req.body.price;
  Product.create({
    name: name,
    imgUrl: imgUrl,
    price: price,
  })
    .then(() => res.send("Product successfully added"))
    .catch((err) => console.log(err));
};
