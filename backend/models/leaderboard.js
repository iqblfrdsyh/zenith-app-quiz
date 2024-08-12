'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Leaderboard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Leaderboard.init({
    userId: DataTypes.STRING,
    total_points: DataTypes.INTEGER,
    rank_position: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Leaderboard',
  });
  return Leaderboard;
};