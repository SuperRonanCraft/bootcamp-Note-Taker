const route = require("express").Router();
const fs = require("fs");

route.use(require("express").json());

// route.use((req, res, next) => {
//   console.log(`${req.method} request to`, req.url);
//   next();
// });

// GET api/notes
route.get("/", (req, res) => {
  fs.readFile("./db/db.json", (err, data) => {
    const notes = JSON.parse(data);
    console.log(notes);
  });
  //Respond with ALL notes in db
});

route.post("/", (req, res) => {
  console.log("Request", req.body);
  const { title, text } = req.body;
  if (title && text) {
    res.status(201);
  } else {
    res.status(500);
  }
});

module.exports = route;
