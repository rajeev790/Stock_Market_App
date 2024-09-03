const axios = require('axios');

exports.getStockData = async (req, res) => {
    try {
        const { symbol } = req.params;
        const response = await axios.get(`https://api.example.com/stocks/${symbol}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching stock data' });
    }
};
