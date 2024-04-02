const route = require("express").Router();
const fs = require("fs");

route.use(require("express").json());

function getNotes() {
  return JSON.parse(fs.readFileSync("./db/db.json"));
}

// GET api/notes
route.get("/", (req, res) => {
  //Respond with ALL notes in db
  const notes = getNotes();
  res.json(notes);
});

// POST api/notes
route.post("/", (req, res) => {
  const { title, text } = req.body;
  if (title && text) {
    const note = {
      title,
      text,
    };
    res.status(201);
  } else {
    res.status(500);
  }
});

module.exports = route;
