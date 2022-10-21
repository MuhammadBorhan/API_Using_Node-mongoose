const express = require("express");
const app = express();
const cors = require("cors");

const productRoute = require('./routes/Product.route');

// Middlewares
app.use(cors());
app.use(express.json());

// Home page
app.get("/", (req, res) => {
    res.send("Wow..!!! Route is Running");
});

// post and read data from database
app.use("/api/v1/product", productRoute);

module.exports = app;

/* const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Tour = require("./models/Tour");
const router = require("./routes/Tour.route");
const { viewCount } = require("./middleware/viewCount");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

//Posting to database
app.use("/api/v1/tour", router);

module.exports = app; */