const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  activityType: String,
  distance: Number,
  duration: Number,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Activity", activitySchema);