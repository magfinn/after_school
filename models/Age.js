const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Age extends Model {}

Age.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
    },
    age_group: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'age',
  }
);

module.exports = Age;
