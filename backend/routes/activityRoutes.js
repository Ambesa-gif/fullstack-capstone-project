const express = require("express");
const router = express.Router();

const Activity = require("../models/Activity");

router.post("/", async (req, res) => {
  try {
    const activity = new Activity(req.body);

    await activity.save();

    res.status(201).json(activity);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const activities = await Activity.find();

    res.json(activities);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;