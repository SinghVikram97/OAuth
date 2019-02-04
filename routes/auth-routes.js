const router = require("express").Router();

// auth login
router.get("/login", (req, res) => {
  res.render("login");
});

// auth logout
route.get("/logout", (req, res) => {
  // handle with passport
  res.send("logging out");
});

// auth with google
router.get("/google", (req, res) => {
  // Handle with passport
  res.send("logging in with google");
});

module.exports = router;
