const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

PlayerData.init(
  {
    player_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    display_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }
);

module.exports = PlayerData;
