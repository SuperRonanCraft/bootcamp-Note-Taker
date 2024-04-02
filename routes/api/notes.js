const route = require("express").Router();

route.use(require("express").json());

route.use((req, res, next) => {
  console.log(req.method, req.query);
  console.log(req.method, req.params);
  console.log(req.method, req.body);
});

// GET api/notes
route.get("/", (req, res) => {
  res.json("Hello world");
});

module.exports = route;
