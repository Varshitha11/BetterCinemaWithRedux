import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchMovies = createAsyncThunk('movies/fetch', async () => {
    const response = await axios.get('http://localhost:8087/getAllMovies');
    return response.data;
});


const fetchMoviesById = createAsyncThunk('moviesById/fetch', async (id) => {
    const response = await axios.get(`http://localhost:8087/movies/${id}`);
    return response.data;
});

const fetchMoviesByTitle = createAsyncThunk('search/fetch', async (search) => {
    const response = await axios.get(`http://localhost:8087/movie/${search}`);
    return response.data;
});

const fetchMoviesByTime = createAsyncThunk('searchByTime/fetch', async (time) => {
    const response = await axios.get(`http://localhost:8087/SearchByTime/${time}`);
    return response.data;
});


const fetchMoviesByTheatre = createAsyncThunk('moviesByTheatre/fetch', async (theatreId) => {
    const response = await axios.get(`http://localhost:8087/getMoviesByTheatreId/${theatreId}`);
    return response.data;
});




export { fetchMovies };
export { fetchMoviesByTitle };
export { fetchMoviesByTime };
export { fetchMoviesByTheatre };
export {fetchMoviesById};



