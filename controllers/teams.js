    const TeamService = require('../services/TeamService')

    exports.listTeams = (req, res, next) =>  {
        const teamService = new TeamService.TeamService();
        res.render('teams', { title: 'Teams', teams: teamService.listTeams()});
    };