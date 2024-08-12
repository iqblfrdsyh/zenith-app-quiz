const express = require("express");
const router = express.Router();

const {
  getAllAchievements,
  createAchievement,
} = require("../controllers/achievement.controller");

router.get("/achievements", getAllAchievements);
router.post("/achievement/create", createAchievement);

module.exports = router;
