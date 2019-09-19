const PlayerService = require('../services/PlayerService');

exports.listPlayers = (req, res, next) => {
    const ps = new PlayerService();
    if (req.query.team === undefined) {
        ps.listPlayers()
            .then(players => {
                console.log(players);
                res.render('players', { title: 'Players', players: players });
            })
    } else {
        console.log(req.query.team);
        const playerService = new PlayerService();
        ps.playersByTeam(parseInt(req.query.team))
            .then(players => {
                res.render('players', { title: 'Players', players: players })
            })
            .catch(err => console.log(err));
    }
};

exports.playerDetails = (req, res, next) => {
    const ps = new PlayerService();
    ps.playerDetails(parseInt(req.params.playerId))
        .then(playerDetails => {
            console.log("Player details ---");
            console.log(playerDetails.awards[0]);
            res.render('player-details', {
                title: 'Player Details - ' + playerDetails.player.name,
                playerDetails: playerDetails
            });
        })
        .error(err => console.log(err));
}

exports.getAwardsByPlayer = (req, res, next) => {
    const ps = new PlayerService();
    ps.playerDetails(parseInt(req.params.playerId))
        .then(playerDetails => {
            res.render('show-awards', {
                title: 'Player - ' + playerDetails.player.name + ' - Awards',
                awards: playerDetails.awards,
                player: playerDetails.player
            });
        });
}

exports.showAwardsView = (req, res, next) => {
    const ps = new PlayerService();
    ps.playerDetails(parseInt(req.params.playerId))
        .then(playerDetails => {
            res.render('add-award', {
                title: 'Player - ' + playerDetails.player.name + ' - Awards',
                awards: playerDetails.awards,
                player: playerDetails.player
            });
        });
}

exports.addAward = (req, res, next) => {
    const ps = new PlayerService();
    const playerId = req.params.playerId;
    const season = parseInt(req.body.season);
    const type = req.body.awardType;
    const newAward = {};
    newAward.season = season;
    newAward.type = type;
    console.log(newAward);
    return ps.addAward(playerId, newAward)
        .then(details => {
            res.redirect('/players/' + details.player.id + '/awards');
        })
}
