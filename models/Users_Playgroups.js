const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class usersPlaygroups extends Model {}

usersPlaygroups.init(
  {
    // Unique ID for the category
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "user_id",
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
    modelName: 'gamesDecks',
  }
);

module.exports = usersPlaygroups;
