const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class decksGames extends Model {}

decksGames.init(
  {
    // Unique ID for the category
    deck_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "decks",
        key: "deck_id",
        unique: false,
      },
    },
    game_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "games",
        key: "game_id",
        unique: false,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'decksGames',
  }
);

module.exports = decksGames;
