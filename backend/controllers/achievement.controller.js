const { Op } = require("sequelize");
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
          required_points: achievement.required_points,
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
    const datas = await Achievement.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
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
        .json({ status: 400, msg: "Can't be just whitespace" });
    }

    const achievementData = await Achievement.findAll({
      where: {
        [Op.or]: [{ title }, { required_points }],
      },
    });

    if (achievementData.length > 0) {
      return res.status(409).json({
        status: 409,
        msg: "An achievement with the same title or required points already exists",
      });
    }

    if (required_points % 100 != 0) {
      return res
        .status(400)
        .json({ status: 400, msg: "Invalid required points" });
    }

    const validLevel = ["Beginner", "Intermediate", "Advanced", "Expert"];

    if (!validLevel.find((levels) => levels == level)) {
      return res.status(400).json({
        status: 400,
        msg: "Invalid level. Please select one of the following: Beginner, Intermediate, Advanced, Expert.",
      });
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

exports.deleteAchievement = async (req, res) => {
  try {
    const { id } = req.query;

    const achievement = await Achievement.findByPk(id);

    if (!achievement) {
      return res.status(404).json({
        status: 404,
        msg: "Achievement tidak ditemukan",
      });
    }

    await UserAchievement.destroy({ where: { achievementId: id } });

    await achievement.destroy();

    return res.status(200).json({
      status: 200,
      msg: "Achievement deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      msg: error.message,
    });
  }
};
