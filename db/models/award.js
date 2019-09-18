'use strict';
module.exports = (sequelize, DataTypes) => {
  const Award = sequelize.define('Award', {
    season: DataTypes.INTEGER,
    type: DataTypes.TEXT
  }, {});
  
  return Award;
};
