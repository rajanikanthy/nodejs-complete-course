'use strict';
module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define('Player', {
    tid: DataTypes.INTEGER,
    name: DataTypes.TEXT,
    imgURL: DataTypes.TEXT,
    dob: DataTypes.TEXT,
    location: DataTypes.TEXT,
    injury: DataTypes.TEXT
  }, {});
  Player.associate = function (models) {
    Player.hasMany(models.Award);
  };
  return Player;
};
