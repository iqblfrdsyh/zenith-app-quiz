const sequelize = require("../models/index.js").sequelize;
const { DataTypes } = require("sequelize");

const User = require("../models/user.js")(sequelize, DataTypes);
const Leaderboard = require(`../models/leaderboard.js`)(sequelize, DataTypes);
const Achievement = require("../models/achievement.js")(sequelize, DataTypes);
const UserAchievement = require("../models/userachievement.js")(
  sequelize,
  DataTypes
);

User.hasMany(Leaderboard, {
  foreignKey: "userId",
  as: "leaderboard",
});

Leaderboard.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});

User.belongsToMany(Achievement, {
  through: UserAchievement,
  onDelete: "CASCADE",
  foreignKey: "userId",
  as: "achievements",
});

Achievement.belongsToMany(User, {
  through: UserAchievement,
  onDelete: "CASCADE",
  foreignKey: "achievementId",
  as: "users",
});

module.exports = { User, Leaderboard, Achievement, UserAchievement };
