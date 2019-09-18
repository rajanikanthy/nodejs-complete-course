const models = require('../db/models')

module.exports = class TeamService {
    constructor() {

    }

    listTeams() {
        return models.Team.findAll();
    }

    createTeam(team) {
        return models.Team.create(team);
    }
}