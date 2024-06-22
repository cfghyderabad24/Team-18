import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
  heading: {
    type: "string",
    required: true,
  },
  body: {
    type: "string",
    required: true,
  },
});

module.exports = mongoose.model("Notifications", notificationSchema);