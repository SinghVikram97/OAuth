const express = require("express");
const authRoutes = require("./routes/auth-routes");

const app = express();

// Set up a view engine
app.set("view engine", "ejs");

// Set up routes
app.use("/auth", authRoutes);

// Create home route
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(4444, () => {
  console.log("Server started at http://localhost:4444");
});
