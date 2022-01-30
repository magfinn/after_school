const sequelize = require('../config/connection');
const {
  Course,
  User,
  Arts,
  Camps,
  ChildCare,
  Dance,
  Music,
  Sports,
  STEM,
  Tutoring,
} = require('../models');

// const courseSeedData = require('./courseSeedData.json');
// const userSeedData = require('./userSeedData.json');
// const ArtsSeedData = require('./artsSeedData.json');
// const DanceSeedData = require('./danceSeedData.json');
// const CampsSeedData = require('./campsSeedData.json');
// const MusicSeedData = require('./musicSeedData.json');
// const SportsSeedData = require('./sportsSeedData.json');
const STEMSeedData = require('./stemSeedData.json');
// const TutoringSeedData = require('./tutoringSeedData.json');
// const ChildCareSeedData = require('./childCareSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // await User.bulkCreate(userSeedData, {
  //   individualHooks: true,
  //   returning: true,
  // });
  // await Arts.bulkCreate(ArtsSeedData, {
  //   individualHooks: true,
  //   returning: true,
  // });
  // await Dance.bulkCreate(DanceSeedData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  // await Course.bulkCreate(courseSeedData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  // await Camps.bulkCreate(CampsSeedData, {
  //   individualHooks: true,
  //   returning: true,
  // });
  // await Music.bulkCreate(MusicSeedData, {
  //   individualHooks: true,
  //   returning: true,
  // });
  // await Sports.bulkCreate(SportsSeedData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  await STEM.bulkCreate(STEMSeedData, {
    individualHooks: true,
    returning: true,
  });

  // await Tutoring.bulkCreate(TutoringSeedData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  process.exit(0);
};

seedDatabase();
