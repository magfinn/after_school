const router = require('express').Router();
const sequelize = require('../config/connection');
const { Course } = require('../models');
const withAuth = require('../utils/auth');

//GET/render new event form at /submit
router.get('/new', (req, res) => res.render('newEvent'));

router.delete('/', (req, res) => {});

router.post('/', (req, res) => {
  res.render('newEvent');
});

router.get('/', (req, res) => {
  res.render('newEvent');
});

module.exports = router;
