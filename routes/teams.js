const express = require('express');
const router = express.Router();
const teamsController = require('../controllers/teams')

router.get('/', teamsController.listTeams);
router.get('/admin/create-team', teamsController.createTeam);

module.exports = router;