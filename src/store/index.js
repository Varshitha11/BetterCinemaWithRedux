import { configureStore } from '@reduxjs/toolkit';
import { moviesReducer } from './slices/moviesSlice';
import { theatresReducer } from './slices/theatresSlice';
import { searchByTimeReducer } from './slices/SearchByTimeSlice';
import { showsReducer } from './slices/showsSlice';
import saveDataSlice from './slices/saveDataSlice';
import { seatsReducer } from './slices/seatsSlice';
import dataSlice from './slices/dataSlice';
import { bookingsReducer } from './slices/bookingSlice';


export const store = configureStore({
    reducer: {
        movies : moviesReducer,
        alldata : saveDataSlice,
        theatres : theatresReducer,
        searchByTime : searchByTimeReducer,
        shows : showsReducer,
        seats : seatsReducer,
        reserveSeat : dataSlice,
        bookings : bookingsReducer,

    },
});

export * from './thunks/fetchMovies';
export * from './thunks/fetchTheatres';
export * from './thunks/fetchShows';
export * from './thunks/fetchSeats';
export * from './thunks/bookings';


