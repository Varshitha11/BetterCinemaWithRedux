import { createSlice } from '@reduxjs/toolkit';
import {  fetchShowsById } from '../thunks/fetchShows';

const showsSlice = createSlice({
    name: 'shows',
    initialState: {
        showdata: [],
        isLoading: false,
        error: null,
    },
    extraReducers(builder) {

        builder.addCase(fetchShowsById.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(fetchShowsById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.showdata = action.payload;
       });

    }
});

export const showsReducer = showsSlice.reducer;