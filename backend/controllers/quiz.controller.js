const { trimmedValue } = require("../helper/functions");
const { Quiz, Topic } = require("../helper/relation");

exports.getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.findAll();
    if (quizzes.length === 0) {
      return res.status(404).json({ status: 404, msg: "No quizzes found" });
    }
    return res
      .status(200)
      .json({ status: 200, total: quizzes.length, data: quizzes });
  } catch (error) {
    return res.status(500).json({ status: 500, msg: error.message });
  }
};

exports.getQuizById = async (req, res) => {
  try {
    const { id } = req.query;
    const quiz = await Quiz.findByPk(id);
    if (!quiz) {
      return res.status(404).json({ status: 404, msg: "Quiz not found" });
    }
    return res.status(200).json({ status: 200, data: quiz });
  } catch (error) {
    return res.status(500).json({ status: 500, msg: error.message });
  }
};

exports.createQuiz = async (req, res) => {
  try {
    const {
      topicId,
      question,
      option1,
      option2,
      option3,
      option4,
      correct_answer,
    } = req.body;

    if (
      trimmedValue(topicId) ||
      trimmedValue(question) ||
      trimmedValue(option1) ||
      trimmedValue(option2) ||
      trimmedValue(option3) ||
      trimmedValue(option4) ||
      trimmedValue(correct_answer)
    ) {
      return res
        .status(400)
        .json({ status: 400, msg: "Can't be just whitespace" });
    }

    const topic = await Topic.findByPk(topicId);
    if (!topic) {
      return res.status(404).json({ status: 404, msg: "Topic not found" });
    }

    const newQuiz = await Quiz.create({
      topicId,
      question,
      option1,
      option2,
      option3,
      option4,
      correct_answer,
    });
    return res
      .status(201)
      .json({ status: 201, msg: "Quiz created", data: newQuiz });
  } catch (error) {
    return res.status(500).json({ status: 500, msg: error.message });
  }
};

exports.updateQuiz = async (req, res) => {
  try {
    const { id } = req.query;
    const {
      topicId,
      question,
      option1,
      option2,
      option3,
      option4,
      correct_answer,
    } = req.body;

    const quiz = await Quiz.findByPk(id);
    if (!quiz) {
      return res.status(404).json({ status: 404, msg: "Quiz not found" });
    }

    const topic = await Topic.findByPk(topicId);
    if (!topic) {
      return res.status(404).json({ status: 404, msg: "Topic not found" });
    }

    const updateData = {
      topicId: topicId || quiz.topicId,
      question: question || quiz.question,
      option1: option1 || quiz.option1,
      option2: option2 || quiz.option2,
      option3: option3 || quiz.option3,
      option4: option4 || quiz.option4,
      correct_answer: correct_answer || quiz.correct_answer,
    };

    const updatedQuiz = await quiz.update(updateData);
    return res
      .status(200)
      .json({ status: 200, msg: "Quiz updated", data: updatedQuiz });
  } catch (error) {
    return res.status(500).json({ status: 500, msg: error.message });
  }
};

exports.deleteQuiz = async (req, res) => {
  try {
    const { id } = req.query;

    const quiz = await Quiz.findByPk(id);
    if (!quiz) {
      return res.status(404).json({ status: 404, msg: "Quiz not found" });
    }

    await quiz.destroy();
    return res.status(200).json({ status: 200, msg: "Quiz deleted" });
  } catch (error) {
    return res.status(500).json({ status: 500, msg: error.message });
  }
};
