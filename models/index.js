const sequelize = require('../config/connection');
const Course = require('./Course');
const User = require('./User');
const Arts = require('./Arts');
const Dance = require('./Dance');
const Camps = require('./Camps');
const Music = require('./Music');
const Sports = require('./Sports');
const STEM = require('./STEM');
const Tutoring = require('./Tutoring');
const ChildCare = require('./ChildCare');

// Course && USER
// User.hasMany(Course, {
//   foreignKey: 'user_id',
// });

// Course.belongsToMany(User, {
//   foreignKey: 'course_id',
//   through: {
//     model: User,
//     attributes: 'saved_course1',
//   },
// });

// // Course && Arts
// Course.belongsTo(Arts, {
//   foreignKey: 'uid'
// });

// Arts.hasMany(Course, {
//   foreignKey: 'arts_id',
// });

// // Course && Location
// Course.belongsTo(Location, {
//   foreignKey: 'locationId',
// });

// Location.hasMany(Course, {
//   foreignKey: 'locationId',
// });

// // Course && Age
// Course.belongsTo(Age, {
//   foreignKey: 'age_id',
// });

// Age.hasMany(Course, {
//   foreignKey: 'age_id',
// });

module.exports = {
  Course,
  Arts,
  Dance,
  Camps,
  ChildCare,
  Music,
  Sports,
  STEM,
  Tutoring,
  User,
};
