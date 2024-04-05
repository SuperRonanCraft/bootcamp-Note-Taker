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

//Route middleware to accept incoming json
route.use(require("express").json());

// GET api/notes
//Respond with ALL notes in db
route.get("/", (req, res) => {
  //Read all data from file and responds with all data
  readFromFile("./db/db.json").then((notes) => {
    res.json(JSON.parse(notes));
  });
});

// POST api/notes
//Request to add notes to json file
route.post("/", (req, res) => {
  const { title, text } = req.body;
  if (title && text) {
    //Create new note object with a unique identifier
    const note = {
      title,
      text,
      id: uuid(),
    };
    //Saves to file
    readAndAppend(note, "./db/db.json");
    //Responds with status 201 and some json
    res.status(201).json({
      success: true,
      note,
    });
  } else {
    //No title or text provided in body
    res.status(500).json({
      success: false,
    });
  }
});

//DELETE api/notes
//Delete specific note id from json file
route.delete("/:id", (req, res) => {
  const note_id = req.params.id;
  if (note_id) {
    //Read data from file
    readFromFile("./db/db.json")
      .then((data, err) => {
        //Convert buffer to json
        let notes = JSON.parse(data);
        //Find the note id if it exists in json
        let note = null;
        for (const noteData of notes) {
          if (noteData.id === note_id) {
            note = noteData;
            break;
          }
        }
        //Note found, deletes from json and saves to file
        if (note) {
          console.log("Removing", note);
          notes.splice(notes.indexOf(note), 1);
          //Saves new json object to memory
          writeToFile("./db/db.json", notes);
          res.status(200).json({
            success: true,
          });
        } else {
          //Note not found, return error
          res.status(500).json({
            success: false,
          });
        }
      })
      .catch((err) => {
        //Incase reading file has an error
        console.log(err);
        res.status(500).json({
          success: false,
        });
      });
  } else {
    //Incase delete has no note id in params
    res.status(501).json({
      success: false,
    });
  }
});

module.exports = route;
