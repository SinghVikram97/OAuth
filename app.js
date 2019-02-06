const express = require("express");
const authRoutes = require("./routes/auth-routes");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");

const app = express();

// Set up a view engine
app.set("view engine", "ejs");

// Cookie session
app.use(
  cookieSession({
    // Takes time in milisecond
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
  })
);

// intialize passport
app.use(passport.initialize());
app.use(passport.session());

// Connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () => {
  console.log("connected to mongodb");
});

// Set up routes
app.use("/auth", authRoutes);

// Create home route
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(4444, () => {
  console.log("Server started at http://localhost:4444");
});
