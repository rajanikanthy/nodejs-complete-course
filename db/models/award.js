'use strict';
module.exports = (sequelize, DataTypes) => {
  const Award = sequelize.define('Award', {
    season: DataTypes.INTEGER,
    type: DataTypes.TEXT
  }, {});

  Award.associate = function (models) {
    Award.belongsTo(models.Player, {
      through: 'id'
    });
  };
  
  return Award;
};
