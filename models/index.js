const sequelize = require('../config/connection');
const Course = require('./Course');
const User = require('./User');
const Category = require('./Category');
const Location = require('./Location');
const SavedCourse = require('./SavedCourse');
const Age = require('./Age');

// User && Courses
User.hasMany(Course, {
  foreignKey: 'course_id',
});

Course.belongsTo(User, {
  foreignKey: 'course_id',
});

//Course && Location
Course.belongsTo(Location, {
  foreignKey: 'location_id',
});

Location.hasMany(Course, {
  foreignKey: 'location_id',
});

//Course && Age
Course.belongsTo(Age, {
  foreignKey: 'age_id',
});

Age.hasMany(Course, {
  foreignKey: 'age_id',
});

//Course && Category
Course.belongsTo(Category, {
  foreignKey: 'category_id',
});

Category.hasMany(Course, {
  foreignKey: 'category_id',
});

//Saved Course && Account
SavedCourse.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(SavedCourse, {
  foreignKey: 'user_id',
});

module.exports = { User, Course, Category, Location, SavedCourse, Age };
