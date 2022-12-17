const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const contactUsRoute = require("./routes/contactus");
const successRoute = require("./routes/success");
// const authRoutes = require("./routes/auth");
// const formRoutes = require("./routes/form");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(contactUsRoute);
app.use(successRoute);
// app.use(authRoutes);
// app.use(formRoutes);

//Handling 404 error page
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404page.html"));
});

app.listen(3000);
