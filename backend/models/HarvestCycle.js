const mongoose = require("mongoose");

const harvestCycleSchema = new mongoose.Schema({
    crop: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Crop"
    }],
    season: {
        type: String,
        enum: ["Summer", "Winter", "Autumn", "Spring", "Rainy"]
    },
    seedSownDate: {
        type: Date.now(),
        required: true
    },
    transplanting: {
        type: String,
        enum: ["Manual", "Machine"]
    },
    irrigationMethod: {
        type: String,
        enum: ["Borewell", "Well", "River", "Drip Irrigation"]
    },
    seedHarvestDate: {
        type: Date.now()
    },
    yield: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("HarvestCycle", harvestCycleSchema);