const express = require("express");
const router = express.Router();

const { getAllTopic, createTopic } = require("../controllers/topic.controller");

router.get("/topics", getAllTopic);
router.post("/topic/create", createTopic);

module.exports = router;
