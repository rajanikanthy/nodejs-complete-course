    const TeamService = require('../services/TeamService')

    exports.listTeams = (req, res, next) =>  {
        const teamService = new TeamService();
        teamService.listTeams().then( teams => {
            console.log(teams);
            return res.render('teams', { title: 'Teams', teams: teams});
        });
    };