const router = require("express").Router();
const {Blog, User} = require("../models");
const withAuth = require("../utils/auth");
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
   blogs: allBlogs,
   logged_in: req.session.logged_in, 
  });
});
router.get("/login", (req, res) => {
  res.render("login", {
    logged_in: req.session.logged_in,
  });
});
router.get("/signup", (req, res) => {
  res.render("signup", {
    logged_in: req.session.logged_in,
  });
});

router.get("/blogs/:id", async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id);

    const blog = blogData.get({ plain: true });

    res.render("blogs", {
      blog,
      name: req.session.name,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/blogs", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Blog }],
    });

    const user = userData.get({ plain: true });

    res.render("user", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/dashboard", withAuth, (req, res) => {
  res.render("dashboard", {
    logged_in: req.session.logged_in,
    name: req.session.name,
  });
});


module.exports = router;
