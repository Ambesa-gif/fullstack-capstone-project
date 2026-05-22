const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema(
  {
    activityType: {
      type: String,
      required: true,
    },

    duration: {
      type: Number,
      required: true,
    },

    carbonEmission: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Activity", activitySchema);