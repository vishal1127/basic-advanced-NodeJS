const http = require("http");
const express = require("express");

const app = express();
app.use((req, res, next) => {
  console.log("inside the middleware");
  next(); // allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
  console.log("insdie another middlerware");
  res.send({ key1: "value" });
});

app.listen(3000);
