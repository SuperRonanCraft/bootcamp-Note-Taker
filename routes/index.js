const route = require("express").Router();
const path = require("path");
const api = require("./api/index");

// /api routes
route.use("/api", api);

// /notes route
route.use("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

module.exports = route;
