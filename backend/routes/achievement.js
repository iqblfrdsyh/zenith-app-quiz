const express = require("express");
const router = express.Router();

const {
  getAllAchievements,
  createAchievement,
  deleteAchievement,
} = require("../controllers/achievement.controller");
const { updateUser } = require("../controllers/user.controller");

router.get("/achievements", getAllAchievements);
router.delete("/achievement/delete", deleteAchievement);
router.post("/achievement/create", createAchievement);

module.exports = router;
