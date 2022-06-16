const User = require('./User');
const Decks = require('./Decks');
const PlayGroups = require('./PlayGroups');
const Games = require('./Games');
const GameHistory = require('./GameHistory');
const usersPlaygroups = require('./Users_Playgroups');
const gamesDecks = require('./Games_Decks');

// One User to Many Decks
User.hasMany(Decks, {
  foreignKey: 'user_id',
});

Decks.belongsTo(User, {
  foreignKey: 'user_id'
});

// One Playgroup to Many Games
PlayGroups.hasMany(Games, {
  foreignKey: 'playgroup_id',
});

Games.belongsTo(PlayGroups, {
  foreignKey: 'playgroup_id'
});



// Many Playgroups to Many Users
PlayGroups.belongsToMany(User, {
  through: usersPlaygroups,
});

User.belongsToMany(PlayGroups, {
  through: usersPlaygroups,
});

// Many Games to Many Decks
Games.belongsToMany(Decks, {
  through: gamesDecks,
});

Decks.belongsToMany(Games, {
  through: gamesDecks,
});

// Many Playgroups to Many Users
GameHistory.belongsToMany(Decks, {
  through: usersPlaygroups,
});

Decks.belongsToMany(GameHistory, {
  through: usersPlaygroups,
});

module.exports = { User, Decks, PlayGroups, GameHistory};
