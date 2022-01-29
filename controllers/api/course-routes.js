const router = require('express').Router();
const { Course, User, Category, Age } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/new', (req, res) => {
  Course.create({
    title: 'req.body.title',
    course_category: 'req.body.course_category',
    course_location: 'req.body.course_location',
    course_age: 'req.body.course_age',
    url: 'req.body.url',
    description: 'req.body.description',
  })
    .then((dbCourseData) => {
      res.json(dbCourseData);
      console.log('data retrieved!');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//UPDATE courses by id
router.put('/:id', (req, res) => {
  Course.update({
    course_title: 'req.body.title',
    location: 'req.body.location',
    category: 'req.body.category',
    age: 'req.body.age',
    description: 'req.body.description',
    url: 'req.body.url',
    contactFirstName: 'req.body.contactFirstName',
    contactLastName: 'req.body.contactLastName',
    contactEmail: 'req.body.contactEmail',
  })
    .then((dbCourseData) => {
      res.json(dbCourseData);
      console.log(dbCourseData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//DELETE

module.exports = router;
