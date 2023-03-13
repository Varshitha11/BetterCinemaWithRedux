import { configureStore } from '@reduxjs/toolkit';
import { moviesReducer } from './slices/moviesSlice';
import { theatresReducer } from './slices/theatresSlice';
import { showsReducer } from './slices/showsSlice';
import { seatsReducer } from './slices/seatsSlice';
import dataSlice from './slices/dataSlice';
import { bookingsReducer } from './slices/bookingSlice';


export const store = configureStore({
    reducer: {
        movies : moviesReducer,
        theatres : theatresReducer,
        shows : showsReducer,
        seats : seatsReducer,
        data : dataSlice,
        bookings : bookingsReducer,
    },
});

export * from './thunks/fetchMovies';
export * from './thunks/fetchTheatres';
export * from './thunks/fetchShows';
export * from './thunks/fetchSeats';
export * from './thunks/bookings';
export * from './thunks/Login';


