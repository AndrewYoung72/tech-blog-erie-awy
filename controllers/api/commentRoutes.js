const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/:blogId', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      date_created: Date.now(),
      name: req.session.name,
      user_id: req.session.user_id,
      blog_id: req.params.blogId,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;