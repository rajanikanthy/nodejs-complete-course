const models = require('../db/models');
const TeamService = require('../services/TeamService');
const PlayerService = require('../services/PlayerService');

exports.showCreateTeamView = (req, res, next) => {
    res.render('create-team', { title: 'Create Team' });
}

exports.createTeam = (req, res, next) => {
    const teamService = new TeamService();
    console.log('Creating team');
    const name = req.body.teamName;
    const imgUrl = req.body.imageUrl;
    const abbrev = req.body.abbrev;
    const region = req.body.region;
    const population = req.body.population;
    const strategy = req.body.strategy;
    const stadiumCapacity = req.body.stadiumCapacity;


    const team = {
        name: name,
        abbrev: abbrev,
        region: region,
        pop: population,
        strategy: strategy,
        stadium: stadiumCapacity,
        imgurl: imgUrl
    };
    teamService.createTeam(team)
        .then(t => {
            console.log(t);
            res.redirect('/teams');
        });
}

exports.showCreatePlayerView = (req, res, next) => {
    const teamService = new TeamService();
    teamService.listTeams()
        .then( teams => {
            res.render('add-player', { title: 'Add Player', teams: teams});
        })
}

exports.createPlayer = (req, res, next) => {
    const tid = req.body.teamName;
    const name = req.body.playerName;
    const imageUrl = req.body.imageUrl;
    const dob = req.body.dob;
    const location = req.body.location;
    const injury = req.body.injury;

    const playerService = new PlayerService();

    const player = {
        tid : tid,
        name: name,
        imgURL: imageUrl,
        dob: dob,
        location: location,
        injury: injury
    };

    playerService.createPlayer(player)
        .then( player => {
            console.log("Player created successfully");
            res.redirect('/players');
        })
        .error(err => console.log(err));
    
}