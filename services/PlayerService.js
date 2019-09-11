const Player = require('../models/player');
const players = require('../data/player-data');
const Award = require('../models/award');

exports.PlayerService = class PlayerService {
    constructor() {

    }

    listPlayers() {
        const p = [];
        players.players.players.forEach(player => {
            let awards = [];
            if (player.awards !== undefined) {
                player.awards.forEach((award) => {
                    awards.push(new Award.Award(award.season, award.type));
                });
            }
            var injury = 'Healthy';
            if (player.injury !== undefined) {
                injury = player.injury.type;
            }
            const pl = new Player.Player(player.tid, player.name, player.born.year, player.born.loc, awards, injury, player.imgURL);
            p.push(pl);
        });
        return p;
    }

    playersByTeam(tid) {
        const p = [];
        players.players.players.forEach(player => {
            if (player.tid === tid) {
                let awards = [];
                if (player.awards !== undefined) {
                    player.awards.forEach((award) => {
                        awards.push(new Award.Award(award.season, award.type));
                    });
                }
                var injury = 'Healthy';
                if (player.injury !== undefined) {
                    injury = player.injury.type;
                }
                const pl = new Player.Player(player.tid, player.name, player.born.year, player.born.loc, awards, injury, player.imgURL);
                p.push(pl);
            }
        })
        return p;
    }
}