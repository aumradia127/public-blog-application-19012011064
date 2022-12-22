const mongoose = require("mongoose");
var passwordLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
  firstname:{
    type:String,
    required:true,
    maxLength:20
    // required:[true ,"first Name must be there!!"]
  },
  lastname:
  {
    type:String,
    required:true,
    maxLength:20

    // required:[true ,"last Name must be there!!"]
  },

  username: {
    // unique:[true,"username must be unique"],
    type:String,
    required:true,
    maxLength:40
    // required:[true ,"user Name must be there!!"]
  },
  password: {
    type:String,
    // required:[true ,"password Name must be there!!"]
  },
});

UserSchema.plugin(passwordLocalMongoose);

module.exports = mongoose.model("User", UserSchema);
