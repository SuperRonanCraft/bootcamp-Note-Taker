const route = require("express").Router();

route.get("/", (req, res) => {
  res.json("Hello world");
});

module.exports = route;
