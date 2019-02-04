const passport = require("passport");

const GoogleStratergy = require("passport-google-oauth2");

passport.use(new GoogleStratergy({}, () => {}));
