const route = require("express").Router();

const notesRouter = require("./notes");

// api/notes route
route.use("/notes", notesRouter);

module.exports = route;
