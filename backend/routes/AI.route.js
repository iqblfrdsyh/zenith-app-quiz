const express = require("express");
const { GenAI } = require("../helper/artificial.intelligence");
const router = express.Router();

router.post("/chat-ai", GenAI);

module.exports = router;
