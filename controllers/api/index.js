const router = require('express').Router();

const courseRoutes = require('./course-routes');
const userRoutes = require('./user-routes');
// const newClassRoutes = require('./new-class-routes');

router.use('/user', userRoutes);
router.use('/course', courseRoutes);
// router.use('/submit', newClassRoutes);

module.exports = router;
