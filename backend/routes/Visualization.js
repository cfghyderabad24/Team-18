const express = require("express");
const router = express.Router();

const {visualData} = require("../controllers/Visualization");

router.post("/visualData", visualData);

module.exports = router;