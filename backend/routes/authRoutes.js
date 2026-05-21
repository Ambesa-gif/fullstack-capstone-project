const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.post("/register", async (req, res) => {
  try {
    const { username, password, email } = req.body;

    const user = new User({
      username,
      password,
      email,
    });

    await user.save();

    res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({
      username,
      password,
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    res.json({
      message: "Login successful",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;