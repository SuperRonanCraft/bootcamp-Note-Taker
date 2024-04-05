const route = require("express").Router();

const notesRouter = require("./notes");

//Index route for anything in /api

// api/notes route
route.use("/notes", notesRouter);

module.exports = route;
