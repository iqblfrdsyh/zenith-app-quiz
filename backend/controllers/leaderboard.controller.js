const { Leaderboard, User } = require("../helper/relation");

exports.getAllLeaderboard = async (req, res) => {
  try {
    const datas = await Leaderboard.findAll({
      include: {
        model: User,
        as: "user",
        attributes: ["id", "fullname", "username", "points"],
      },
    });
    if (!datas.length) {
      return res
        .status(404)
        .json({ status: 404, msg: "Not found data leaderboard" });
    }
    res.status(200).json({ status: 200, total: datas.length, datas });
  } catch (error) {
    res.status(500).json({ status: 500, msg: error.message });
  }
};

exports.updateLeaderboard = async () => {
  try {
    const users = await User.findAll({
      order: [["points", "DESC"]],
      attributes: ["id", "fullname", "points"],
    });

    for (let rank = 0; rank < users.length; rank++) {
      const user = users[rank];
      const leaderboardEntry = await Leaderboard.findOne({
        where: { userId: user.id },
      });

      if (leaderboardEntry) {
        await leaderboardEntry.update({
          total_points: user.points,
          rank_position: rank + 1,
        });
      } else {
        await Leaderboard.create({
          userId: user.id,
          total_points: user.points,
          rank_position: rank + 1,
        });
      }
    }
  } catch (error) {
    console.error("Error updating leaderboard:", error.message);
  }
};
