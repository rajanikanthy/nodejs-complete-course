const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

router.get('/teams/show-create-team-view', adminController.showCreateTeamView);
router.post('/teams/create-team', adminController.createTeam);
router.get('/players/show-add-player-view', adminController.showCreatePlayerView);
router.post('/players/add-player', adminController.createPlayer)

module.exports = router;