const express = require("express");
const router = express.Router();

const {harvestCycleData, updateSeedHarvestDate} = require("../controllers/HarvestCycle");

router.post("/harvestData", harvestCycleData);
router.post("/harvestDateupdate", updateSeedHarvestDate);

module.exports = router;