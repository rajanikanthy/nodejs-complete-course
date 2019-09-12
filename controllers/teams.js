    const TeamService = require('../services/TeamService')

    exports.listTeams = (req, res, next) =>  {
        const teamService = new TeamService.TeamService();
        res.render('teams', { title: 'Teams', teams: teamService.listTeams()});
    };

    exports.createTeam = (req, res, next) => {
        res.render('create-team', { title: 'Create Team'});
    }