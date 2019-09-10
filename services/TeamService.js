const Team = require('../models/team')
const teamsData = require('../data/team-data')

exports.TeamService = class TeamService {
    constructor() {

    }

    listTeams() {
        const t = [];
        teamsData.teams.forEach((team) => {
            const tm = new Team.Team(team.tid, team.name, team.abbrev, team.region, team.pop, team.strategy, team.stadiumCapacity, team.imgURL);
            t.push(tm);
        });
        return t;
    }
}