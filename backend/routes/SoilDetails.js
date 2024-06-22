const express = require("express");
const router = express.Router();

const {updateSoilDetails} = require("../controllers/SoilDetails");

router.post("/update", updateSoilDetails);


module.exports = router;