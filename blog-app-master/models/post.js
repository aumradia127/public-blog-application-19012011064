const mongoose = require("mongoose");

var postSchema = mongoose.Schema({
  name:{
    type:String,
    required:true,
    maxLength:150
  },
  image:{
    type:String,
    required:true
  },
  description:
  {
    type:String,
    required:true,
    maxLength:1000
  },
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    username: String,
  },
  
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

module.exports = mongoose.model("Post", postSchema);
