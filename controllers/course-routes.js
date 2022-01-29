const router = require('express').Router();
const sequelize = require('../config/connection');
const { Course, Location, Category, Age } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  Course.findAll()
    .then((response) => {
      const courses = response.map((course) => course.get({ plain: true }));
      res.render('courses', { courses });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});
//GET/render new event form at /submit
router.get('/new', (req, res) => res.render('newEvent'));

// // Submit new event
// router.post('/course/new', async ({ body }, res) => {
//   console.log(body);
//   const response = await signup(body);
//   // Signup complete then render page again.
//   res.render('homepage');
// });

// GET courses by category && location && age
router.get('/:category/:location/:age', async (req, res) => {
  const category = await Course.findAll({
    where: { category: req.params.category },
  });
  const categoryId = category.get().id;

  const location = await Location.findAll({
    where: { location: req.params.location },
  });
  const locationId = location.get().id;

  const age = await Course.findAll({
    where: { age: req.params.age },
  });
  const ageId = age.get().id;

  Course.findAll({
    where: {
      category: categoryId,
      location: locationId,
      age: ageId,
    },
    raw: true,
  })
    .then((dbCourseData) => {
      if (!dbCourseData) {
        res.status(404).json({
          message: 'We could not find a course by these parameters',
        });
        return;
      }
      res.render('course', { courses: dbCourseData, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//GET courses by category
router.get('/:category/', async (req, res) => {
  const category = await Course.findAll({
    where: { category: req.params.category },
  });
  const categoryId = category.get().id;

  Course.findAll({
    where: {
      category: categoryId,
    },
    raw: true,
  })
    .then((dbCourseData) => {
      if (!dbCourseData) {
        res.status(404).json({
          message: 'No course found in this category. Try a different category',
        });
        return;
      }
      res.render('course', { courses: dbCourseData });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//GET courses by location
router.get('/:location/', async (req, res) => {
  const location = await Course.findAll({
    where: { location: req.params.location },
  });
  const locationId = location.get().id;

  Course.findAll({
    where: {
      location: locationId,
    },
    raw: true,
  })
    .then((dbCourseData) => {
      if (!dbCourseData) {
        res.status(404).json({
          message: 'No course found in this location. Try a different location',
        });
        return;
      }
      res.render('course', { courses: dbCourseData });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//GET courses by age
router.get('/:age/', async (req, res) => {
  const age = await Course.findAll({
    where: { age: req.params.age },
  });
  const ageId = age.get().id;

  Course.findAll({
    where: {
      age: ageId,
    },
    raw: true,
  })
    .then((dbCourseData) => {
      if (!dbCourseData) {
        res.status(404).json({
          message: 'No course found in this age. Try a different age',
        });
        return;
      }
      res.render('course', { courses: dbCourseData });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET course by name
router.get('/:id/', (req, res) => {
  Course.findAll({
    where: {
      id: req.params.id,
    },
    raw: true,
  })
    .then((dbCourseData) => {
      console.log(dbCourseData);
      if (!dbCourseData) {
        res.status(404).json({ message: 'No courses found with this id' });
        return;
      }
      let course = dbCourseData.get({ plain: true });
      res.render('courses', { course });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
