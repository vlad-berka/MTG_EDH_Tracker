const User = require('./User');
const Decks = require('./Decks');
const Players = require('./Players');
const PlayGroups = require('./PlayGroups');
const Games = require('./Games');
const playersPlaygroup = require('./Players_Playgroups');
const gamesDecks = require('./Games_Decks');

// One User to Many Decks
Players.hasMany(Decks, {
  foreignKey: 'player_id',
});

Decks.belongsTo(Players, {
  foreignKey: 'player_id'
});

// One User to One Player
User.hasOne(Players, {
  foreignKey: 'user_id',
});

Players.belongsTo(User, {
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
PlayGroups.belongsToMany(Players, {
  through: playersPlaygroup,
});

Players.belongsToMany(PlayGroups, {
  through: playersPlaygroup,
});

// Many Games to Many Decks
Games.belongsToMany(Decks, {
  through: gamesDecks,
});

Decks.belongsToMany(Games, {
  through: gamesDecks,
});


module.exports = { User, Decks, Players, PlayGroups, Games, playersPlaygroup, gamesDecks};
