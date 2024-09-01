// # Controller files (business logic)

const { mongoose } = require("mongoose");
const users = require("../models/users");
const jwt = require("jsonwebtoken");
const blog = require("../models/blog");

module.exports = {
  createUser: async (req, res) => {
    const emailExists = await users.findOne({ email: req.body.email });
    if (emailExists)
      return res.status(400).send({
        data: {
          success: 0,
          message: "Already exists email",
        },
      });
    const user = new users(req.body);
    try {
      await user.save();
      res.status(200).send({
        data: {
          success: 1,
          message: "Successfull Sigin",
        },
      });
    } catch (error) {
      res.status(500).send(error);
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      // Check if the user exists
      const user = await users.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }

      // Validate password
      const isMatch = await user.matchPassword(password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }

      // Generate JWT token
      const token = jwt.sign(
        { id: user._id, userName: user.username, userEmail: user.email },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );

      res.json({ success: 1, token });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  },
  createBlogs: async (req, res) => {
    const blogPost = new blog(req.body);
    try {
      await blogPost.save();
      res.status(200).send({
        data: {
          success: 1,
          message: "Successfull post blog",
        },
      });
    } catch (error) {
      res.status(500).send(error);
    }
  },
  getBlogs: async (req, res) => {
    try {
       blogPost = await blog.find()
      res.status(200).send({
        data: {
          success: 1,
          data: blogPost,
        },
      });
    } catch (error) {
      res.status(500).send(error);
    }
  },
  getBlogsByID : async (req,res)=>{
    console.log(req.params.id);
    
    try {
      const user = await blog.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!user) {
        return res.status(404).send();
      }
      res.send(user);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  getBlogsUsers : async (req,res)=>{
    const userID = req.body.userID
    // console.log(userID);
    
    try {
      const user = await blog.find({userID:userID})
      if (!user) {
        return res.status(404).send();
      }
      res.send({
        success:1,
        data:user
      });
    } catch (error) {
      console.log(error);
      
      res.status(400).send(error);
    }
  }
};
