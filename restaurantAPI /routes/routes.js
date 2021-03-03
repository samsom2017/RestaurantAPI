const express = require("express");
const restaurantRouter = require("./restaurant");
const app = express();

app.use("/restaurant/", restaurantRouter);

module.exports = app;
