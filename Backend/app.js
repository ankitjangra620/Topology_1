const express = require("express");
const app = express();
let bodyParser = require("body-parser")
const cors = require("cors");
const { resolveAny } = require("dns");
const { promisify } = require('util');
const request = require("request"),
      passport = require("passport"),
      LocalStratergy = require("passport-local"),
      passportLocalMongoose = require("passport-local-mongoose"),
      User = require("./Models/Users.js")
const UserRoutes = require("./routes/Users.js");
app.use(UserRoutes);
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// app.use(require("express-session")({
//       secret: "Nice Rusty",
//       resave: false,
//       saveUninitialized: false
// }));
// app.use(passport.initialize())
// app.use(passport.session())

// app.use(function (req, res, next) {
//       res.locals.currentUser = req.user
//       next()
// })
// passport.use(new LocalStratergy(User.authenticate()));
// passport.serializeUser(User.serializeUser())
// passport.deserializeUser(User.deserializeUser())
app.get("/", function (req, res, next) {
      console.log("Request at /");
      res.send("reogjviowr");
})
// Listen at 3001

app.listen(3001, () => {

      console.log("Server is listning at port number 3001");

})