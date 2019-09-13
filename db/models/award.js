'use strict';
module.exports = (sequelize, DataTypes) => {
  const Award = sequelize.define('Award', {
    season: DataTypes.TEXT,
    type: DataTypes.TEXT
  }, {});
  Award.associate = function(models) {
    // associations can be defined here
    Award.belongsToMany(Player, { through: 'PlayerAward'})
  };
  return Award;
};