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
    // CSV String containing the deck id's in win order 1,2,3,4
    win_order: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // CSV String array containing the deck id's in turn order 3,4,1,2
    turn_order: {
      type: DataTypes.STRING,
      allowNull: false,
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
