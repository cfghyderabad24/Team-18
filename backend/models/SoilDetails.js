const mongoose = require("mongoose");

const soilDetailsSchema = new mongoose.Schema({
    pH: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("SoilDetails", soilDetailsSchema);