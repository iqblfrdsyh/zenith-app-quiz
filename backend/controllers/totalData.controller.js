const {
  TotalData,
  Achievement,
  Quiz,
  Topic,
  User,
  Category,
} = require("../helper/relation");

exports.getTotalData = async (req, res) => {
  try {
    const [achievementCount, quizCount, topicCount, userCount, categoryCount] =
      await Promise.all([
        Achievement.count(),
        Quiz.count(),
        Topic.count(),
        User.count(),
        Category.count(),
      ]);

    await TotalData.upsert({
      id: 1,
      quizzes: quizCount,
      topics: topicCount,
      achievements: achievementCount,
      category: categoryCount,
      users: userCount,
    });

    const totalData = await TotalData.findAll();

    if (!totalData.length) {
      return res.status(404).json({ msg: "No data found" });
    }

    return res.status(200).json({ status: 200, data: totalData });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      msg: "An error occurred while fetching total data.",
    });
  }
};
