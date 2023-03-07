import { createSlice } from '@reduxjs/toolkit';
import { fetchTheatres } from '../thunks/fetchTheatres';

const theatresSlice = createSlice({
    name : 'theatres',
    initialState: {
        data: [],
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
    }
});

export const theatresReducer = theatresSlice.reducer;