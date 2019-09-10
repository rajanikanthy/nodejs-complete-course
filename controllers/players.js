const PlayerService = require('../services/PlayerService');

exports.listPlayers = (req, res, next) => {
    const ps = new PlayerService.PlayerService(); 
    res.render('players', { title: 'Players', players: ps.listPlayers() })
};