const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Games extends Model {}

Games.init(
  {
    // Unique ID for the game
    game_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    
    first_place_deck_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'decks',
        key: 'deck_id',
      },
    },
    second_place_deck_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'decks',
        key: 'deck_id',
      },
    },
    third_place_deck_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'decks',
        key: 'deck_id',
      },
    },
    fourth_place_deck_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'decks',
        key: 'deck_id',
      },
    },
    first_seat_deck_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'decks',
        key: 'deck_id',
      },
    },
    second_seat_deck_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'decks',
        key: 'deck_id',
      },
    },
    third_seat_deck_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'decks',
        key: 'deck_id',
      },
    },
    fourth_seat_deck_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'decks',
        key: 'deck_id',
      },
    },
    game_summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date_played: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    // Foreign ID for the playgroup it belongs to
    playgroup_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'playgroups',
        key: 'playgroup_id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'games',
  }
);

module.exports = Games;
