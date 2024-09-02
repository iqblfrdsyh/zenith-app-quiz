const express = require("express");
const router = express.Router();

const {
  getAllCategory,
  createCategory,
  updateCategory,
} = require("../controllers/category.controller");

router.get("/categories", getAllCategory);
router.post("/category/create", createCategory);
router.put("/category/update", updateCategory);

module.exports = router;
