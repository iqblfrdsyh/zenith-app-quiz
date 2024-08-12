const express = require("express");
const router = express.Router();

const {
  getAllLeaderboard,
} = require("../controllers/leaderboard.controller");

router.get("/leaderboard", getAllLeaderboard);

module.exports = router;
