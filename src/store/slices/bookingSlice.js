import { createSlice } from '@reduxjs/toolkit';
import { bookings , fetchMovieByUserName, fetchOrders} from '../thunks/bookings';

const bookingSlice = createSlice({
    name: 'bookings',
    initialState: {
        bookings: [],
        orders : [],
        movieByUserName : '',
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
        builder.addCase(fetchOrders.fulfilled, (state, action) => {
            state.isLoading = false;
            state.orders = action.payload;
        });
        builder.addCase(fetchMovieByUserName.fulfilled, (state, action) => {
            state.isLoading = false;
            state.movieByUserName = action.payload;
        });

    }
});

export const bookingsReducer = bookingSlice.reducer;