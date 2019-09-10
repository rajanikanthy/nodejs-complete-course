const express = require('express');
const router = express.Router();
const teamsController = require('../controllers/teams')

router.get('/', teamsController.listTeams)

module.exports = router;