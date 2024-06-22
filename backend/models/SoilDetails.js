const mongoose = require("mongoose");

const soilDetailsSchema = new mongoose.Schema({
    pH: {
        type: Number,
        required: true
    },
    phosphorus: {
        type: Number,
        required: true
    },
    potassium: {
        type: Number,
        required: true
    },
    magnesium: {
        type: Number,
        required: true
    },
    limestone: {
        type: Number,
        required: true
    },
    calcium: {
        type: Number,
        required: true
    },
    cec: { // Cation Exchange Capacity
        type: Number,
        required: true
    },
    zinc: {
        type: Number,
        required: true
    },
    copper: {
        type: Number,
        required: true
    },
    sulfur: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("SoilDetails", soilDetailsSchema);