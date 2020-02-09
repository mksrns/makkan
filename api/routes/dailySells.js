const express = require('express');
const router = express.Router();
const DailySellsController = require('../controllers/dailySells');

//Fetch all dailySell
router.get('/', DailySellsController.dailySells_get_all);

//Fetch Individual dailySell
// router.get('/:dailySellId', DailySellsController.dailySells_get_dailySell);

//Insert dailySell
router.post('/', DailySellsController.dailySells_create_dailySell);

//Update dailySell
//router.patch('/:dailySellId', DailySellsController.dailySells_update_dailySell);

//Delete dailySell
// router.delete('/:dailySellId', DailySellsController.dailySells_delete_dailySell);

module.exports = router;