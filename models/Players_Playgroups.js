const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class playersPlaygroups extends Model {}

playersPlaygroups.init(
  {
    // Unique ID for the category
    player_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "players",
        key: "player_id",
      },
    },
    playgroup_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "playgroups",
        key: "playgroup_id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'playersPlaygroup',
  }
);

module.exports = playersPlaygroups;
