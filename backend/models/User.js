const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    contactNumber: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    accountType: {
        type: String,
        enum: ["Admin", "Volunteer", "Farmer"],
        required: true
    },
    additionalDetails: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Profile"
    },
    soilDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SoilDetails"
    },
    harvestCycle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "HarvestCycle"
    },
    notifications: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Notifications"
        }
    ]
}, {timestamps: true});

module.exports = mongoose.model("User", userSchema);