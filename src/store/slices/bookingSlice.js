import { createSlice } from '@reduxjs/toolkit';
import { bookings } from '../thunks/bookings';

const bookingSlice = createSlice({
    name: 'bookings',
    initialState: {
        bookings: [],
        isLoading: false,
        error: null,
    },
    extraReducers(builder) {

        builder.addCase(bookings.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(bookings.fulfilled, (state, action) => {
            state.isLoading = false;
            state.bookings.push(action.payload);
        });

    }
});

export const bookingsReducer = bookingSlice.reducer;