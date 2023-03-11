import { createSlice } from '@reduxjs/toolkit';
import { fetchScreens, fetchTheatres, fetchTheatresByMovie } from '../thunks/fetchTheatres';

const theatresSlice = createSlice({
    name : 'theatres',
    initialState: {
        data: [],
        theatredata : [],
        screendata : [],
        isLoading: false,
        error: null,
    },
    extraReducers(builder){
        builder.addCase(fetchTheatres.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchTheatres.fulfilled, (state, action) => {
             state.isLoading = false;
             state.data = action.payload;
        });
        builder.addCase(fetchTheatres.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.error;
        });
        builder.addCase(fetchTheatresByMovie.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchTheatresByMovie.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.theatredata = action.payload;
        });
        builder.addCase(fetchTheatresByMovie.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.error;
        });
        builder.addCase(fetchScreens.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.screendata = action.payload;
        });
    }
});

export const theatresReducer = theatresSlice.reducer;