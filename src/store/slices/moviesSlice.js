import { createSlice } from '@reduxjs/toolkit';
import { fetchMovies, fetchMoviesById, fetchMoviesByTheatre, fetchMoviesByTime, fetchMoviesByTitle} from '../thunks/fetchMovies';

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        data: [],
        searchByTime : [],
        moviedata : '',
        isLoading: false,
        error: null,
    },
    extraReducers(builder) {

        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.searchByTime = [];
        });
        
        builder.addCase(fetchMovies.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });


        builder.addCase(fetchMoviesByTitle.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });


        builder.addCase(fetchMoviesByTheatre.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        
        builder.addCase(fetchMoviesById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.moviedata = action.payload;
        });
        builder.addCase(fetchMoviesByTime.fulfilled, (state, action) => {
            state.isLoading = false;
            state.searchByTime = action.payload;
       });
    }
});

export const moviesReducer = moviesSlice.reducer;