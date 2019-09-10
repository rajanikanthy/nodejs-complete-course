const Player = require('../models/player');
const players = require('../data/player-data');

exports.PlayerService = class PlayerService {
    constructor() {

    }

    listPlayers() {
        const p = [];
        players.players.players.forEach(player => {
            const pl = new Player.Player(player.tid, player.name, player.imgURL);
            p.push(pl);
        });
        return p;
    }

    playersByTeam(tid) {
        const p = [];
        players.players.players.forEach(player => {
            if (player.tid === tid) {
                const pl = new Player.Player(player.tid, player.name, player.imgURL);
                p.push(pl);
            }
        })
        return p;
    }
}