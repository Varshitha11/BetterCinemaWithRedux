import { createSlice } from '@reduxjs/toolkit';
import { fetchMovies, fetchMoviesById, fetchMoviesByTheatre, fetchMoviesByTitle, fetchShowById } from '../thunks/fetchMovies';

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        data: [],
        moviedata : '',
        isLoading: false,
        error: null,
    },
    extraReducers(builder) {
        builder.addCase(fetchMovies.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
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
        

        builder.addCase(fetchMoviesById.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(fetchMoviesById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.moviedata = action.payload;
        });

    }
});

export const moviesReducer = moviesSlice.reducer;