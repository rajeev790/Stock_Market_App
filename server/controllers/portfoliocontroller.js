const Portfolio = require('../models/Portfolio');

exports.getPortfolio = async (req, res) => {
    try {
        const portfolio = await Portfolio.find({ userId: req.user.id });
        res.json(portfolio);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching portfolio' });
    }
};

exports.addStockToPortfolio = async (req, res) => {
    try {
        const { symbol, quantity } = req.body;
        const newStock = new Portfolio({ userId: req.user.id, symbol, quantity });
        await newStock.save();
        res.status(201).json(newStock);
    } catch (error) {
        res.status(500).json({ message: 'Error adding stock to portfolio' });
    }
};
