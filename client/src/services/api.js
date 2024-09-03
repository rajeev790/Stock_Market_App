import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const fetchStockData = async (symbol) => {
    const response = await axios.get(`${API_URL}/stocks/${symbol}`);
    return response.data;
};
