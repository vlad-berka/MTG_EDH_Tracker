const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Decks extends Model {}

Decks.init(
  {
    // Unique ID for the category
    deck_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Name of the category
    // i.e. Appetizers, Main Course, Drinks
    deck_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    commander_img_url: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: "https://c1.scryfall.com/file/scryfall-cards/normal/front/1/d/1d7262a7-f48c-411b-8a0e-c5bd8f646145.jpg?1562487898"
    },
    play_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    // Foreign ID for the user it belongs to
    player_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'players',
        key: 'player_id',
      },
    },
    // Date of the order, auto generated
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'decks',
  }
);

module.exports = Decks;
