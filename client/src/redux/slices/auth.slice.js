import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

export const fetchAuth = createAsyncThunk('auth/fetchAuth',
    async (params) => {
        const { data } = await axios.post('http://localhost:5000/api/auth/login', params)
        return data;
    }
)

const initialState = {
    data: null,
    status: 'loading'
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers:(builder)=> {

      
        // [fetchAuth.pending]: (state) => {
        //     state.status = 'loading';
        //     state.data = null
        // },
        // [fetchAuth.fulfilled]: (state, action) => {
        //     state.status = 'loaded';
        //     state.data = action.payload
        // },
        // [fetchAuth.rejected]: (state) => {
        //     state.status = 'error';
        //     state.data = null
        // },
    }
});

export const authReducer = authSlice.reducer