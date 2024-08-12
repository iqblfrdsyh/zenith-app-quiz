const { trimmedValue } = require("../helper/functions");
const { User, Achievement, UserAchievement } = require("../helper/relation");

exports.CheckAndAddAchievements = async (userId) => {
  try {
    const user = await User.findByPk(userId, {
      include: [{ model: Achievement, as: "achievements" }],
    });

    if (!user) {
      throw new Error("User not found");
    }

    const achievements = await Achievement.findAll();
    const achievementsToAdd = [];
    const addedAchievements = [];

    for (const achievement of achievements) {
      const hasAchievement = user.achievements.some(
        (ach) => ach.id === achievement.id
      );

      if (!hasAchievement && user.points >= achievement.required_points) {
        achievementsToAdd.push({
          userId: user.id,
          achievementId: achievement.id,
        });
        addedAchievements.push({
          title: achievement.title,
          level: achievement.level,
          required_points: achievement.required_points
        });
      }
    }

    if (achievementsToAdd.length) {
      await UserAchievement.bulkCreate(achievementsToAdd);
      return {
        status: 201,
        message: `${achievementsToAdd.length} achievements added to user "${user.fullname}"`,
        data: addedAchievements,
      };
    }

    return {
      status: 204,
      message: "No new achievements added",
      data: [],
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getAllAchievements = async (req, res) => {
  try {
    const datas = await Achievement.findAll();
    if (!datas.length) {
      return res
        .status(404)
        .json({ status: 404, msg: "No data achievement found" });
    }

    return res.status(200).json({ status: 200, total: datas.length, datas });
  } catch (error) {
    return res.status(500).json({ status: 500, msg: error.message });
  }
};

exports.createAchievement = async (req, res) => {
  try {
    const { title, required_points, level } = req.body;

    if (
      trimmedValue(title) ||
      trimmedValue(required_points) ||
      trimmedValue(level)
    ) {
      return res
        .status(400)
        .json({ status: 400, msg: "All fields are required" });
    }

    const newAchievement = await Achievement.create({
      title,
      required_points,
      level,
    });

    return res.status(201).json({
      status: 201,
      msg: "Achievement created successfully",
      data: newAchievement,
    });
  } catch (error) {
    return res.status(500).json({ status: 500, msg: error.message });
  }
};
