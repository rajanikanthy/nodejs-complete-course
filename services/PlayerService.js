const models = require('../db/models')

module.exports = class PlayerService {
    constructor() {
    }

    createPlayer(player) {
        return models.Player.create(player);
    }

    listPlayers() {
        return models.Player.findAll();
    }

    playersByTeam(tid) {
        return models.Player.findAll({
            where: { tid : tid }
        });
    }

    playerDetails(playerId) {
        const playerDetails = {};
        return models.Player.findOne({
            where: {
                id: playerId
            }
        })
            .then(player => {
                return player.getAwards()
                    .then(awards => {
                        console.log(awards);
                        playerDetails.player = player;
                        playerDetails.awards = awards;
                        return playerDetails;
                    })
            })
            .error( err => console.log(err));
    }

    addAward(playerId, award) {
        return models.Player.findOne({
            where :{
                id: playerId
            }
        })
        .then( player => {
            return player.addAward(award);
        });
    }
}