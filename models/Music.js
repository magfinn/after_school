const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Music extends Model {}

Music.init(
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
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'music',
  }
);

module.exports = Music;