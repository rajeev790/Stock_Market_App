import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, signup } from '../services/auth';

export const loginUser = createAsyncThunk('user/login', async (credentials) => {
    const response = await login(credentials.email, credentials.password);
    return response;
});

export const signupUser = createAsyncThunk('user/signup', async (credentials) => {
    const response = await signup(credentials.email, credentials.password);
    return response;
});

const userSlice = createSlice({
    name: 'user',
    initialState: { userInfo: null, status: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                state.userInfo = action.payload;
                state.status = 'logged_in';
            })
            .addCase(signupUser.fulfilled, (state, action) => {
                state.userInfo = action.payload;
                state.status = 'signed_up';
            });
    },
});

export default userSlice.reducer;
