const User = require('./User');
const Decks = require('./Decks');

User.hasMany(Decks, {
  foreignKey: 'user_id',
});

Decks.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Decks };
