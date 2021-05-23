const router = require("express").Router();
let Comment = require("../../models/Comment");

router.route("/").get((req, res) => {
  Comment.find()
    .then((comments) => res.json(comments))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").post((req, res) => {
  const newComment = new Comment({
    email: req.body.email,
    comment: req.body.comment,
  });

  newComment
    .save()
    .then((comment) => res.json(comment))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
