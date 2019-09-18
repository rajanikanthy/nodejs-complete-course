const express = require('express');
const router = express.Router();
const playersController = require('../controllers/players');

router.get('/', playersController.listPlayers);
router.get('/details', playersController.playerDetails);
router.get('/:playerId/awards', playersController.getAwardsByPlayer);
router.get('/:playerId/addAwardView', playersController.showAwardsView);

module.exports = router;