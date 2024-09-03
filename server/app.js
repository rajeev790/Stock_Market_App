const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const stockRoutes = require('./routes/stockRoutes');
const portfolioRoutes = require('./routes/portfolioRoutes');

const app = express();

connectDB();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/stocks', stockRoutes);
app.use('/api/portfolio', portfolioRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
