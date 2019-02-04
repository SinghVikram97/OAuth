const passport = require("passport");
const GoogleStratergy = require("passport-google-oauth2");
const keys = require("./keys");
passport.use(
  new GoogleStratergy(
    {
      // options for the google stratergy
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret
    },
    () => {
      // passport callback function
    }
  )
);
