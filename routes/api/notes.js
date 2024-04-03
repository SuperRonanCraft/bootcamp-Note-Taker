//Depends
const route = require("express").Router();
const fs = require("fs");
//Utils
const uuid = require("../../helpers/uuid");
const {
  readFromFile,
  writeToFile,
  readAndAppend,
} = require("../../helpers/fsUtils");

//Routes
route.use(require("express").json());

// GET api/notes
route.get("/", (req, res) => {
  //Respond with ALL notes in db
  readFromFile("./db/db.json").then((notes) => {
    res.json(JSON.parse(notes));
  });
});

// POST api/notes
route.post("/", (req, res) => {
  const { title, text } = req.body;
  if (title && text) {
    const note = {
      title,
      text,
      id: uuid(),
    };
    readAndAppend(note, "./db/db.json");
    res.status(201).json({
      success: true,
      note,
    });
  } else {
    res.status(500).json({
      success: false,
    });
  }
});

route.delete("/:id", (req, res) => {});

module.exports = route;
