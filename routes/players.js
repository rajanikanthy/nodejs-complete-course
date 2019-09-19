const express = require('express');
const router = express.Router();
const playersController = require('../controllers/players');

router.get('/', playersController.listPlayers);
router.get('/:playerId/details', playersController.playerDetails);
router.get('/:playerId/awards', playersController.getAwardsByPlayer);
router.get('/:playerId/addAwardView', playersController.showAwardsView);
router.post('/:playerId/associateAward', playersController.addAward);

module.exports = router;