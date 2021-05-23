const router = require("express").Router();
let User = require("../../models/user");
const grav = require("gravatar");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").post((req, res) => {
  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const dateTime = date + " " + time;

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      User.findOneAndUpdate(
        { email: req.body.email },
        { $set: { latestComment: dateTime } },
        { new: true }
      ).then((user) => {
        res.json(user);
      });
    } else {
      const avatar = grav.url(req.body.email, {
        size: "150",
        rating: "pg",
        default: "mm",
      });
      const newUser = new User({
        email: req.body.email,
        latestComment: dateTime,
        avatar,
      });
      newUser
        .save()
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json("Error: " + err));
    }
  });
});

module.exports = router;
