const express = require("express");
const User = require("../model/user");

const router = express.Router();

router.post("/add-user", async (req, res) => {
  try {
    const { username, email, dateOfBirth } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send("Email already exists");
    }

    await User.create({ username, email, dateOfBirth });

    res.redirect("/");
  } catch (error) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
