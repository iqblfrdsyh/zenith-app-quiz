'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CategoryTopic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CategoryTopic.init({
    categoryId: DataTypes.INTEGER,
    topicId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CategoryTopic',
  });
  return CategoryTopic;
};