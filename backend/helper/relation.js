const sequelize = require("../models/index.js").sequelize;
const { DataTypes } = require("sequelize");

const User = require("../models/user.js")(sequelize, DataTypes);
const Leaderboard = require(`../models/leaderboard.js`)(sequelize, DataTypes);
const Achievement = require("../models/achievement.js")(sequelize, DataTypes);
const UserAchievement = require("../models/userachievement.js")(
  sequelize,
  DataTypes
);
const Quiz = require("../models/quiz.js")(sequelize, DataTypes);
const Topic = require("../models/topic.js")(sequelize, DataTypes);
const Category = require("../models/category.js")(sequelize, DataTypes);
const CategoryTopic = require("../models/categorytopic.js")(
  sequelize,
  DataTypes
);
const TotalData = require("../models/totaldata.js")(sequelize, DataTypes);

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

Category.belongsToMany(Topic, {
  through: CategoryTopic,
  onDelete: "CASCADE",
  as: "topics",
});

Topic.belongsToMany(Category, {
  through: CategoryTopic,
  onDelete: "CASCADE",
  as: "categories",
});

Topic.hasMany(Quiz, {
  foreignKey: "topicId",
  as: "quizzes",
});

Quiz.belongsTo(Topic, {
  foreignKey: "topicId",
  as: "topic",
});

module.exports = {
  User,
  Leaderboard,
  Achievement,
  UserAchievement,
  Quiz,
  Topic,
  Category,
  CategoryTopic,
  TotalData,
};
