const sequelize = require('../config/connection');
const Course = require('./Course');
const User = require('./User');
const Category = require('./Category');
const Location = require('./Location');
// const SavedCourse = require('./SavedCourse');
const Age = require('./Age');

// Course && USER
User.hasMany(Course, {
  foreignKey: 'user_id',
});

Course.belongsTo(User, {
  foreignKey: 'user_id',
});

// Course && Category
Course.belongsToMany(Category, {
  through: "course_category",
  as: "courses",
  foreignKey: 'categoryId',
});

Category.hasMany(Course, {
  foreignKey: 'categoryId',
});

// Course && Location
Course.belongsTo(Location, {
  foreignKey: 'locationId',
});

Location.hasMany(Course, {
  foreignKey: 'locationId',
});

// Course && Age
Course.belongsTo(Age, {
  foreignKey: 'age_id',
});

Age.hasMany(Course, {
  foreignKey: 'age_id',
});

module.exports = { Course, Category, Location, Age };
