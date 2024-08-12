"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.STRING,
        unique: true,
        primaryKey: true,
      },
      fullname: DataTypes.STRING,
      username: {
        type: DataTypes.STRING,
        unique: true
      },
      password: DataTypes.TEXT,
      achievement: DataTypes.INTEGER,
      points: DataTypes.INTEGER,
      refreshToken: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
