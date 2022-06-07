const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Decks extends Model {}

Decks.init(
  {
    // Unique ID for the category
    id: {
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
    commander_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    play_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // Foreign ID for the user it belongs to
    owner_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'user_id',
      },
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
