const router = require("express").Router();
const Blog = require("../models/Blog")
const apiRoutes = require("./api");

router.use("/api", apiRoutes);
router.get("/", async (req, res) => {
  const result = await Blog.findAll({})
  const allBlogs = result.map(blog => {
    return blog.get({
      plain: true
    })
  })
  console.log(allBlogs)
  res.render("homePage", {

   blogs: allBlogs 
  });
});
router.get("/login", (req, res) => {
  res.render("login", {
    user_name: req.session.user_name,
    user_name: req.session.user_name,
  });
});
router.get("/signup", (req, res) => {
  res.render("signup");
});
router.get("/dashboard", (req, res) => {
  res.render("dashboard", {
    logged_in: req.session.logged_in,
    user_name: req.session.user_name,
  });
});


module.exports = router;
