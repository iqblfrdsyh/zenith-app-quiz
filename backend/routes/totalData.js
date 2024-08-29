const express = require("express");

const router = express.Router();

const { getTotalData } = require("../controllers/totalData.controller");

router.get("/totalData", getTotalData);

module.exports = router;
