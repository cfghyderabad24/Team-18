const express = require("express");
const router = express.Router();

const {sendNotifs, deleteNotif, getAllNotif} = require("../controllers/Notification");

router.post("/sendNotifs", sendNotifs);
router.post("/deleteNotif", deleteNotif);
router.post("/getAllNotif", getAllNotif);

module.exports = router;