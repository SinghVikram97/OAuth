const passport = require("passport");
const GoogleStratergy = require("passport-google-oauth2");
const keys = require("./keys");
const User = require("../models/user-model");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStratergy(
    {
      // options for the google stratergy
      callbackURL: "/auth/google/redirect",
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret
    },
    (accessToken, refreshToken, profile, done) => {
      // Check if user alread exists in our database
      User.findOne({ googleId: profile.id }).then(currentUser => {
        if (currentUser) {
          // already have the user
          console.log("user is: ", currentUser);
          done(null, currentUser);
        } else {
          // if not,create user in our db
          // passport callback function
          new User({
            username: profile.displayName,
            googleId: profile.id
          })
            .save()
            .then(newUser => {
              console.log("new user created: ", newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);
