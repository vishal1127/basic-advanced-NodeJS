const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const sequelize = require("./utils/database");

//importing table models
const User = require("./models/user");
const Product = require("./models/products");
const Cart = require("./models/cart");
const CartItem = require("./models/cart-item");

const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

//importing and accessing routes
const productRoutes = require("./routes/products");
const cartRoutes = require("./routes/cart");
app.use(productRoutes);
app.use(cartRoutes);

//defining associations
User.hasMany(Product);
Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });

User.hasOne(Cart);
Cart.belongsTo(User);

Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

sequelize
  // .sync({ force: true })
  .sync()
  .then(() => {
    return User.findByPk(1);
  })
  .then((user) => {
    if (!user) {
      return User.create({ name: "Vishal Singh", email: "vishal@gmail.com" });
    }
    return user;
  })
  .then((user) => {
    return user.createCart();
  })
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
