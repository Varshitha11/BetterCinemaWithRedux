import { createSlice } from '@reduxjs/toolkit';
import { fetchSeats } from '../thunks/fetchSeats';

const seatsSlice = createSlice({
    name: 'seats',
    initialState: {
        seatsData: [],
        isLoading: false,
        error: null,
    },
    extraReducers(builder) {

        builder.addCase(fetchSeats.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(fetchSeats.fulfilled, (state, action) => {
            state.isLoading = false;
            state.seatsData = action.payload;
       });

    }
});

export const seatsReducer = seatsSlice.reducer;
