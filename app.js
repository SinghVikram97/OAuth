const express = require("express");

const app = express();

// Set up a view engine
app.set("view engine", "ejs");

// Create home route
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(4444, () => {
  console.log("Server started at http://localhost:4444");
});
