const express = require("express");
const router = express.Router();

const {
  getAllTopic,
  createTopic,
  updateTopic,
  getTopicByCategory,
} = require("../controllers/topic.controller");

router.get("/topics", getAllTopic);
router.get("/topic", getTopicByCategory);
router.post("/topic/create", createTopic);
router.put("/topic/update", updateTopic);

module.exports = router;
