const models = require('../db/models');

module.exports = class AwardService {
    constructor() {

    }

    createAward(award) {
        return models.Award.create(award);
    }
}