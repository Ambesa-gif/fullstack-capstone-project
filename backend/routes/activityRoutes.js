const express = require("express");
const router = express.Router();

const Activity = require("../models/Activity");

router.get("/", async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { activityType, duration, carbonEmission } = req.body;

    const newActivity = new Activity({
      activityType,
      duration,
      carbonEmission,
    });

    const savedActivity = await newActivity.save();

    res.status(201).json(savedActivity);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to create activity",
      error: error.message,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedActivity = await Activity.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedActivity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Activity.findByIdAndDelete(req.params.id);

    res.json({ message: "Activity deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;