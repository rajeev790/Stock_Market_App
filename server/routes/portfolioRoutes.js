const express = require('express');
const { getPortfolio, addStockToPortfolio } = require('../controllers/portfolioController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

router.get('/', getPortfolio);
router.post('/', addStockToPortfolio);

module.exports = router;
