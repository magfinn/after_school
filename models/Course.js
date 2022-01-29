const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Course extends Model {}

Course.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    course_title: {
      type: DataTypes.STRING,
    },
    course_category: {
      type: DataTypes.STRING,
      references: {
        model: 'category',
        key: 'id',
      },
    },
    course_location: {
      type: DataTypes.STRING,
      references: {
        model: 'location',
        key: 'id',
      },
    },
    course_age: {
      type: DataTypes.STRING,
      references: {
        model: 'age',
        key: 'id',
      },
    },

    course_url: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },

    course_description: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'course',
  }
);

module.exports = Course;
