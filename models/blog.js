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
  userID: {
    type: String,
  },
  image: {
    type: String,
  },
  slug:{
    type:String
  }
});
module.exports = mongoose.model("blogs", blogPost);
