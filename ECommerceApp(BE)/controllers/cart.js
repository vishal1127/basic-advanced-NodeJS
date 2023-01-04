const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const Product = require("../models/products");

exports.getCart = (req, res, next) => {
  req.user
    .getCart()
    .then((cart) => {
      return cart.getProducts();
    })
    .then((cartProducts) => res.json(cartProducts))
    .catch((err) => console.log(err));
};

exports.addToCart = (req, res, next) => {
  const prodId = req.body.prodId;
  let fetchedCart;
  let newQuantity = 1;
  req.user
    .getCart()
    .then((cart) => {
      fetchedCart = cart;
      return cart.getProducts({ where: { id: prodId } });
    })
    .then((cartProducts) => {
      let cartProduct;
      if (cartProducts.length > 0) cartProduct = cartProducts[0];
      if (cartProduct) {
        const oldQuantity = cartProduct.cartItem.quantity;
        newQuantity = +oldQuantity + 1;
        return cartProduct;
      }
      return Product.findByPk(prodId);
    })
    .then((newProduct) => {
      return fetchedCart.addProduct(newProduct, {
        through: { quantity: newQuantity },
      });
    })
    .then(() => res.send("Product added to cart successfully"))
    .catch((err) => console.log(err));
};
