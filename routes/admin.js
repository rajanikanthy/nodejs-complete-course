const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

router.get('/teams/create-team', adminController.createTeam);
router.get('/players/add-player', adminController.addPlayer);

module.exports = router;