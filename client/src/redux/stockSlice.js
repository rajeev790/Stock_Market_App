import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchStockData } from '../services/api';

export const getStockData = createAsyncThunk('stock/fetchData', async (symbol) => {
    const data = await fetchStockData(symbol);
    return data;
});

const stockSlice = createSlice({
    name: 'stock',
    initialState: { stockData: null, status: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getStockData.fulfilled, (state, action) => {
                state.stockData = action.payload;
                state.status = 'fetched';
            });
    },
});

export default stockSlice.reducer;
