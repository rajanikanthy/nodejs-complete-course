const PlayerService = require('../services/PlayerService');

exports.listPlayers = (req, res, next) => {
    const ps = new PlayerService.PlayerService();
    if (req.query.team === undefined) {
        res.render('players', { title: 'Players', players: ps.listPlayers() })
    } else {
        console.log(req.query.team);
        res.render('players', { title: 'Players', players: ps.playersByTeam(parseInt(req.query.team))})
    }
};
