const { trimmedValue, isStrongPassword } = require("../helper/functions.js");
const { User, Leaderboard, Achievement } = require("../helper/relation.js");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { updateLeaderboard } = require("./leaderboard.controller.js");
const { CheckAndAddAchievements } = require("./achievement.controller.js");

exports.getUser = async (req, res) => {
  try {
    const datas = await User.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: [
        {
          model: Leaderboard,
          as: "leaderboard",
          attributes: { exclude: ["id", "userId", "createdAt", "updatedAt"] },
        },
        {
          model: Achievement,
          as: "achievements",
          attributes: {
            exclude: ["UserAchievement", "createdAt", "updatedAt"],
          },
          through: { attributes: [] },
        },
      ],
    });
    if (!datas.length) {
      return res.status(404).json({ status: 404, msg: "No data user found" });
    }
    res.status(200).json({ status: 200, total: datas.length, datas });
  } catch (error) {
    res.status(500).json({ status: 500, msg: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { userId } = req.query;
    const { points } = req.body;

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ status: 404, msg: "User tidak ditemukan" });
    }

    const updatedData = {
      points: user.points + parseInt(points || 0),
    };

    await user.update(updatedData);

    const achievementResult = await CheckAndAddAchievements(userId);
    await updateLeaderboard();

    res.status(200).json({
      status: 200,
      msg: "User updated successfully",
      status_achievements: achievementResult.status,
      msg_achievements: achievementResult.message,
      newAchievements : achievementResult.data
    });
  } catch (error) {
    res.status(500).json({ status: 500, msg: error.message });
  }
};

exports.signup = async (req, res) => {
  try {
    const { fullname, username, password, confirmPassword } = req.body;

    if (
      trimmedValue(fullname) ||
      trimmedValue(username) ||
      trimmedValue(password) ||
      trimmedValue(confirmPassword)
    ) {
      return res.status(400).json({ status: 400, msg: "Tidak boleh kosong!" });
    }

    if (!isStrongPassword(password)) {
      return res.status(400).json({
        status: 400,
        msg: "Password minimal 8 karakter serta mengandung huruf kapital dan angka!",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        status: 400,
        msg: "Password dan Confirm Password tidak sesuai",
      });
    }

    const userData = await User.findOne({ where: { username } });

    if (userData) {
      return res.status(400).json({ status: 400, msg: "Username telah ada" });
    }

    const hashedPassword = await bcrypt.hash(password, 15);

    const randomChara = uuidv4().slice(0, 4);
    const userID = `zenID-${randomChara}`;

    await User.create({
      id: userID,
      fullname,
      username,
      password: hashedPassword,
      achievement: 0,
      points: 0,
    });

    res.status(201).json({ status: 201, msg: "New user created" });
  } catch (error) {
    res.status(500).json({ status: 500, msg: error.message });
  }
};

exports.signin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findAll({
      where: {
        username: username,
      },
    });

    if (trimmedValue(username) || trimmedValue(password)) {
      return res
        .status(400)
        .json({ status: 400, msg: "Input tidak boleh kosong" });
    }

    if (user.length === 0) {
      return res
        .status(404)
        .json({ status: 404, msg: "Username tidak ditemukan" });
    }

    const match = await bcrypt.compare(password, user[0].password);
    if (!match) {
      return res.status(400).json({ status: 400, msg: "Password salah!" });
    }

    const userId = user[0].id;
    const fullname = user[0].fullname;
    const uname = user[0].username;
    const achievement = user[0].achievement;
    const points = user[0].points;

    const accessToken = jwt.sign(
      { userId, uname },
      process.env.SECRET_ACCESS_TOKEN,
      {
        expiresIn: "2m",
      }
    );
    const refreshToken = jwt.sign(
      { userId, uname },
      process.env.SECRET_REFRESH_TOKEN,
      {
        expiresIn: "1d",
      }
    );

    await User.update(
      { refreshToken },
      {
        where: {
          id: userId,
        },
      }
    );

    res.cookie("refreshToken", refreshToken, {
      maxAge: 24 * 60 * 60 * 1000,
    });

    req.user = { userId, fullname, username: uname, achievement, points };

    res.json({ accessToken });
  } catch (error) {
    res.status(500).json({ status: 500, msg: error.message });
  }
};

exports.signout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  try {
    const isExist = await User.findAll({
      where: { refreshToken },
    });
    if (!isExist)
      return res.status(403).json({ status: 403, msg: "Anda belum login" });

    await User.update(
      { refreshToken: null },
      {
        where: {
          refreshToken,
        },
      }
    );

    res.clearCookie("refreshToken");
    res.json({ msg: "Anda telah Logout" });
  } catch (error) {
    res.status(500).json({ status: 500, msg: error.message });
  }
};

exports.isLogin = async (req, res) => {
  try {
    const userId = req.userId;

    const user = await User.findOne({
      where: {
        id: userId,
      },
      attributes: ["id", "fullname", "username", "achievement", "points"],
    });

    if (!user) {
      return res.status(404).json({ status: 404, msg: "User tidak ditemukan" });
    }

    res.json({ user });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
