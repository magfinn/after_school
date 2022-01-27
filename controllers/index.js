const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const courseRoutes = require('./course-routes');
const dashboardRoutes = require('./dashboard-routes');
// const newClassRoutes = require('./new-class-routes');
// const signup = require('./signup');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/courses', courseRoutes);
router.use('/dashboard', dashboardRoutes);
// router.use('/submit', newClassRoutes);
// router.use('/signup', signup);

module.exports = router;
