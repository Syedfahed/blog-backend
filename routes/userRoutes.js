// # Custom middleware functions

const {
  createUser,
  login,
  createBlogs,
  getBlogs,
  getBlogsByID,
  getBlogsUsers,
} = require("../controllers/userController");

const router = require("express").Router();

router.post("/signup", createUser);
router.post("/login", login);
router.post("/create-blog", createBlogs);
router.get("/blogs", getBlogs);
router.put("/blog/:id", getBlogsByID);
router.post("/userblogs", getBlogsUsers);


module.exports = router;
