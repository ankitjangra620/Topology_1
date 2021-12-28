var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose")
var UserSchema = new mongoose.Schema({
      username: {
            type: String,
            required: true
      },
      email: {
            type: String,
            required: true
      },
      avatar: {
            type: Buffer,
      },
      password: {
            type: String,
            required: true
      }
})

module.exports = mongoose.model("User", UserSchema)