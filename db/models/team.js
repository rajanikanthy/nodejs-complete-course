'use strict';
module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    name: DataTypes.STRING,
    abbrev: DataTypes.STRING,
    region: DataTypes.STRING,
    pop: DataTypes.BIGINT,
    strategy: DataTypes.STRING,
    stadium: DataTypes.STRING,
    imgurl: DataTypes.STRING
  }, {});
  Team.associate = function(models) {
    // associations can be defined here
  };
  return Team;
};