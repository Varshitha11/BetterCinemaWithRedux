import { configureStore } from '@reduxjs/toolkit';
import { moviesReducer } from './slices/moviesSlice';
import { theatresReducer } from './slices/theatresSlice';
import { searchByTimeReducer } from './slices/SearchByTimeSlice';
import { showsReducer } from './slices/showsSlice';


export const store = configureStore({
    reducer: {
        movies : moviesReducer,
        theatres : theatresReducer,
        searchByTime : searchByTimeReducer,
        shows : showsReducer,
        
    },
});


export * from './thunks/fetchMovies';
export * from './thunks/fetchTheatres';
export * from './thunks/fetchShows';


