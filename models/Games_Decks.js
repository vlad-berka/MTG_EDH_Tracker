const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class gamesDecks extends Model {}

gamesDecks.init(
  {
    // Unique ID for the category
    game_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "games",
        key: "game_id",
      },
    },
    deck_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "decks",
        key: "deck_id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'gamesDecks',
  }
);

module.exports = gamesDecks;
