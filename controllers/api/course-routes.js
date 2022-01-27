const router = require('express').Router();
const { Course, User, Category, Age } = require('../../models');
const withAuth = require('../../utils/auth');

//testing: post route works /api/courses/new but the
//CREATE new course
router.post('/new', (req, res) => {
  const newClass = {
    course_title: 'req.body.title',
    location_id: ['req.body.location_id'],
    category_id: ['req.body.category_id'],
    age_id: 'req.body.age_id',
    description: 'req.body.description',
    url: 'req.body.url',
  };
  Course.create({ newClass })
    .then((course) => {
      res.json(course);
      console.log(course);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//READ courses in object format

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
