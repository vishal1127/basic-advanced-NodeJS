const Product = require("../models/products");

exports.getProducts = (req, res, next) => {
  req.user.getProducts().then((products) => res.json(products));
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.prodId;
  req.user
    .getProducts({ where: { id: prodId } })
    .then((products) => {
      let product = products[0];
      res.json(product);
    })
    .catch((err) => console.log(err));
};

exports.addProduct = (req, res, next) => {
  const name = req.body.name;
  const imgUrl = req.body.imgUrl;
  const price = req.body.price;
  req.user
    .createProduct({
      name: name,
      imgUrl: imgUrl,
      price: price,
      userId: req.user.id,
    })
    .then(() => res.send("Product successfully added"))
    .catch((err) => console.log(err));
};
