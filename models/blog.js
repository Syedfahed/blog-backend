const mongoose = require("mongoose");

const blogPost = new mongoose.Schema({
  userEmail: {
    type: String,
  },
  postBy: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  postDate: {
    type: String,
  },
  userID:{
    type:Number,
    default:()=>1,
    unique:1
  }
});
module.exports = mongoose.model("blogs", blogPost);
