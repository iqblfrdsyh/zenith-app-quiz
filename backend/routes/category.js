const express = require("express");
const router = express.Router();

const {
  getAllCategory,
  createCategory,
} = require("../controllers/category.controller");

router.get("/categories", getAllCategory);
router.post("/category/create", createCategory);

module.exports = router;
