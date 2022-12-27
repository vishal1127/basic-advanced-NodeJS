const express = require("express");
const bodyParser = require("body-parser");

const sequelize = require("./utils/database");

const app = express();

const expenseRoutes = require("./routes/expenses");
app.use(bodyParser.json());
app.use(expenseRoutes);

sequelize
  .sync()
  .then((result) => {
    // console.log("result", result);
    app.listen(3000);
  })
  .catch((err) => console.log(err));
