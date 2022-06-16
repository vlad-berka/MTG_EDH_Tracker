const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { Decks, Games } = require("../models");

class gamesDecks extends Model {}

gamesDecks.init(
  {
    // // Unique ID for the category
    // game_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: Games,
    //     key: "game_id",
    //   },
    // },
    // deck_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: Decks,
    //     key: "deck_id",
    //   },
    // },
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
