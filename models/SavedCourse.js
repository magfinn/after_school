const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class SavedCourse extends Model {}

SavedCourse.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // age_id: {
    //   type: DataTypes.STRING,
    //   references: {
    //     model: 'age',
    //     key: 'id',
    //   },
    // },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    course_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'course',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'savedCourse',
  }
);

module.exports = SavedCourse;
