const express = require("express");

const api = require("./api/index");

const port = process.env.PORT || 3001;
const app = express();

app.use(express.static("public"));

app.use("/api", api);

//Start app
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
