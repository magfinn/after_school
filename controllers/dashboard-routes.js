const router = require('express').Router();
const sequelize = require('../config/connection');
const { Course, Age, User, SavedCourse } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
  Course.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: [
      'id',
      'title',
      'category_id',
      'location_id',
      'age_id',
      'description',
      'user_id',
      'url',
      'created_at',
    ],
    include: [
      {
        model: 'savedCourse',
        attributes: [
          'id',
          'saved_course',
          'user_id',
          'course_id',
          'created_at',
        ],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
    .then((dbCourseData) => {
      const courses = dbCourseData.map((course) => course.get({ plain: true }));

      res.render('dashboard', { courses, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
