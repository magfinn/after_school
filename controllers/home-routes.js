//Import the custom middleware
const withAuth = require('../utils/auth');
const router = require('express').Router();
const { Course, User } = require('../models');
const sequelize = require('../config/connection');

// //GET render courses page
// router.get('/course', (req, res) => {
//   res.render('courses');
// });

//GET render about us
router.get('/about', (req, res) => {
  res.render('about');
});

//GET/render login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  } else '/login';
});

//GET confirmation page
router.get('/confirm', (req, res) => {
  res.render('confirm');
});

//GET/render signup page
router.get('/signup', (req, res) => {
  res.render('signup');
});

// // render homepage
router.get('/', async (req, res) => {
  res.render('homepage');
});

module.exports = router;
