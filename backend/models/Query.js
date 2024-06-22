const mongoose = require("mongoose");

const querySchema = new mongoose.Schema({
    body: {
        type: String,
    },
    image: {
        type: String,
    },
    audio: {
        type: String,
    },
    ansText: {
        type: String,
    },
    ansAudio: {
        type: String,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
});

module.exports = mongoose.model("Query", querySchema);