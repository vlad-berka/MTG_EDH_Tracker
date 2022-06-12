const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Games extends Model {}

Games.init(
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
      type: DataTypes.STRING,
      allowNull: false,
    },
    second_place_deck_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    third_place_deck_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fourth_place_deck_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Foreign ID for the playgroup it belongs to
    playgroup_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'playgroup',
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
