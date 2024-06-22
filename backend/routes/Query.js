const express = require("express");
const router = express.Router();

const {createQuery, getQueries, answerQuery, removeQuery} = require("../controllers/Query");

router.post("/create", createQuery);
router.post("/getAll", getQueries);
router.post("/answer", answerQuery);
router.post("/remove", removeQuery);

module.exports = router;