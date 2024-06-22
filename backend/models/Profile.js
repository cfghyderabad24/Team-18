const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    gender: {
        type: String
    },
    age: {
        type: String
    },
    village: {
        type: String,
        trim: true
    },
    state: {
        type: String,
        trim: true
    },
    pincode: {
        type: Number
    },
    AadharNumber: {
        type: Number
    },
    areaPloughed: {
        type: Number
    },
    fertilizersUsed: {
        type: String,
        enum: ["Organic", "Chemical", "Bioinputs"]
    }
});

module.exports = mongoose.model("Profile", profileSchema);