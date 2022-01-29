// const router = require('express').Router();
// const { Course, User, Category, Age } = require('../../models');
// const withAuth = require('../../utils/auth');

// //testing: post route works /api/courses/new but the
// //CREATE new course
// router.post('/', (req, res) => {
//   const newClass = {
//     course_title: 'req.body.title',
//     category_id: ['req.body.category'],
//     location_id: ['req.body.location'],
//     age_id: 'req.body.age',
//     description: 'req.body.description',
//     url: 'req.body.url',
//     first_name: ['req.body.firstName'],
//     last_name: ['req.body.lastName'],
//     email: ['req.body.email']
//   };
//   Course.create({ newClass })
//     .then((course) => {
//       res.json(course);
//       console.log(course);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// module.exports = router;
