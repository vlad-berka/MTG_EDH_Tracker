const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class GameHistory extends Model {}

GameHistory.init(
  {
    // Unique ID for the category
    game_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Name of the category
    // i.e. Appetizers, Main Course, Drinks
    first_place_deck_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    second_place_deck_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    third_place_deck_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fourth_place_deck_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    first_seat_deck_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    second_seat_deck_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    third_seat_deck_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fourth_seat_deck_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    modelName: 'gameHistory',
  }
);

module.exports = GameHistory;
