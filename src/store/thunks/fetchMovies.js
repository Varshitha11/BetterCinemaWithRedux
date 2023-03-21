import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
    const response = await axios.get('http://localhost:8087/getAllMovies');
    return response.data;
});


const fetchMoviesById = createAsyncThunk('movies/fetchMoviesById', async (id) => {
    const response = await axios.get(`http://localhost:8087/movies/${id}`);
    return response.data;
});

const fetchMoviesByTitle = createAsyncThunk('movies/fetchMoviesByTitle', async (search) => {
    const response = await axios.get(`http://localhost:8087/movie/${search}`).catch((error => 
    {
        alert(error.response.data);
    }));
    return response.data;
});

const fetchMoviesByTime = createAsyncThunk('movies/fetchMoviesByTime', async (time) => {
    const response = await axios.get(`http://localhost:8087/SearchByTime/${time}`);
    return response.data;
});


const fetchMoviesByTheatre = createAsyncThunk('movies/fetchMoviesByTheatre', async (theatreId) => {
    const response = await axios.get(`http://localhost:8087/getMoviesByTheatreId/${theatreId}`);
    return response.data;
});




export { fetchMovies };
export { fetchMoviesByTitle };
export { fetchMoviesByTime };
export { fetchMoviesByTheatre };
export {fetchMoviesById};



