const sequelize = require('../config/connection');
const { Decks, User, PlayGroups, Players , Games , playerPlaygroup} = require('../models');

const deckData = require('./deckData.json');
const playerData = require('./playerData.json');
const userData = require('./userData.json');
const gameData = require('./gameData_UNFINISHED.json');
const playgroupData = require('./playgroupData.json');
const playerPlaygroupData = require('./playerPlaygroupData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  //Loads the userData with the user model into the mtg_edh_tracker_db
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  //Loads the deckData with the decks model into the mtg_edh_tracker_db
  for (const deck of deckData) {
    await Decks.create({
      ...deck
    });
  }

  //Loads the playgroupData with the playgroup model into the mtg_edh_tracker_db
  for (const group of playgroupData) {
    await PlayGroups.create({
      ...group
    });
  }

  //Loads the playerData with the player model into the mtg_edh_tracker_db
  for (const player of playerData) {
    await Players.create({
      ...player
    });
  }

  //Loads the gameData (match history) with the games model into the mtg_edh_tracker_db
  for (const games of gameData) {
    await Games.create({
      ...games
    });
  }

  //Loads the many to many playerPlaygroup with the playerPlaygroup model into the mtg_edh_tracker_db
  for (const merger of playerPlaygroupData) {
    await playerPlaygroup.create({
      ...merger
    });
  }

    process.exit(0);
};

seedDatabase();
