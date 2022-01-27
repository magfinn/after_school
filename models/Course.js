const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Course extends Model {}

Course.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING(1234),
    },
    url: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },
    contactFirstName: {
      type: DataTypes.STRING,
    },
    contactLastName: {
      type: DataTypes.STRING,
    },
    contactEmail: {
      type: DataTypes.STRING,
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'location',
        key: 'id',
      },
    },
    age_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'age',
        key: 'id',
      },
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
