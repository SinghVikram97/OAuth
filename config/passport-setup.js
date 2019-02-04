const passport = require("passport");
const GoogleStratergy = require("passport-google-oauth2");

passport.use(
  new GoogleStratergy(
    {
      // options for the google stratergy
      clientID:
        "245526895964-upj0mdim2c6g1q1juahhkp0m7g5iinsm.apps.googleusercontent.com",
      clientSecret: "-0qUMMjqx3IoQuu95f8bqcoz"
    },
    () => {
      // passport callback function
    }
  )
);
