const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
const Course = require('./Course.js');

class ChildCare extends Model {}

ChildCare.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },
    description: {
      type: DataTypes.STRING,
    },
    // course_tag: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: Course,
    //     attributes: 'id',
    //   }
    // }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'childCare',
  }
);

module.exports = ChildCare;
