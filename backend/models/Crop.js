const mongoose = require("mongoose");

const cropSchema = new mongoose.Schema({
    crop: {
        type: String,
        required: true
    },
    seedsUsed: {
        type: String,
        enum: ["Own", "Given by IFTR", "Purchased from Outside"]
    },
    
});

module.exports = mongoose.model("Crop", cropSchema);