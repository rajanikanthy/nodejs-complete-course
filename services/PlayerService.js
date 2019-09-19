const models = require('../db/models')
const AwardService = require('../services/AwardService');

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

    playerById(playerId) {
        return models.Player.findOne({
            where : {
                'id' : playerId
            }
        })
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
        const details = {};
        return models.Player.findOne({
            where : {
                id: playerId
            }
        })
        .then(player => {
            details.player = player;
            return player.createAward(award);
        })
        .then( award => {
            details.award = award;
            return details;
        })
        .catch(err => console.log(err));
    }
}