const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PlayGroups extends Model {}

PlayGroups.init(
  {
    // Unique ID for the Playgroup
    playgroup_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    group_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'playgroups',
  }
);

module.exports = PlayGroups;
