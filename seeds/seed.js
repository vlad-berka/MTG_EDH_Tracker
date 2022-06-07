const sequelize = require('../config/connection');
const { Decks, User } = require('../models');

const deckData = require('./deckData.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  //Loads the userData with the User model into the MTG_EDH_db
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  //Loads the deckData with the Decks model into the MTG_EDH_db
  for (const category of categoryData) {
    await Categories.create({
      ...category
    });
  }

    process.exit(0);
};

seedDatabase();
