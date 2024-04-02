const route = require("express").Router();

const notesRouter = require("./notes");

route.use("/notes", notesRouter);

module.exports = route;
