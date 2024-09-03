const express = require('express');
const { getStockData } = require('../controllers/stockController');

const router = express.Router();

router.get('/:symbol', getStockData);

module.exports = router;
