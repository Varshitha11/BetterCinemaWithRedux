import { configureStore } from '@reduxjs/toolkit';
import { moviesReducer } from './slices/moviesSlice';
import { theatresReducer } from './slices/theatresSlice';
import { searchByTimeReducer } from './slices/SearchByTimeSlice';

export const store = configureStore({
    reducer: {
        movies : moviesReducer,
        theatres : theatresReducer,
        searchByTime : searchByTimeReducer,
        
    },
});


export * from './thunks/fetchMovies';
export * from './thunks/fetchTheatres';


