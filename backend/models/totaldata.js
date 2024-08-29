'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TotalData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TotalData.init({
    quizzes: DataTypes.INTEGER,
    topics: DataTypes.INTEGER,
    achievements: DataTypes.INTEGER,
    category: DataTypes.INTEGER,
    users: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TotalData',
  });
  return TotalData;
};