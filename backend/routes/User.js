const express = require("express");
const router = express.Router();

const {login, signup, update} = require("../controllers/Auth");

const {auth} = require("../middlewares/auth");

router.post("/login", login);
router.post("/signup", signup);
router.post("/update", auth, update);

module.exports = router;