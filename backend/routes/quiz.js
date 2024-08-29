const express = require("express");
const router = express.Router();

const {
  getAllQuizzes,
  getQuizById,
  createQuiz,
  updateQuiz,
  deleteQuiz,
} = require("../controllers/quiz.controller");

router.get("/quizzes", getAllQuizzes);
router.get("/quiz", getQuizById);
router.post("/quiz/create", createQuiz);
router.put("/quiz/update", updateQuiz);
router.delete("/quiz/delete", deleteQuiz);

module.exports = router;
