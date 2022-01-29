const sequelize = require('../config/connection');
const { Course, User, Location, Category, Age } = require('../models');

// const userSeedData = require('./userSeedData.json');
const courseSeedData = require('./courseSeedData.json');
const categorySeedData = require('./categorySeedData.json');
const locationSeedData = require('./locationSeedData');
const ageSeedData = require('./ageSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // await User.bulkCreate(userSeedData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  await Location.bulkCreate(locationSeedData, {
    individualHooks: true,
    returning: true,
  });
  await Category.bulkCreate(categorySeedData, {
    individualHooks: true,
    returning: true,
  });
  await Age.bulkCreate(ageSeedData, {
    individualHooks: true,
    returning: true,
  });

  await Course.bulkCreate(courseSeedData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};

seedDatabase();
