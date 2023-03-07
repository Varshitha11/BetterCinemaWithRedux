import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchMovies = createAsyncThunk('movies/fetch', async () => {
    const response = await axios.get('http://localhost:8087/getAllMovies');

    return response.data;
});

const fetchMoviesByTitle = createAsyncThunk('search/fetch', async (search) => {
    const response = await axios.get(`http://localhost:8087/movie/${search}`);
    return response.data;
})

const fetchMoviesByTime = createAsyncThunk('searchByTime/fetch', async (time) => {
    const response = await axios.get(`http://localhost:8087/SearchByTime/${time}`);
    // const baseUrl = "http://localhost:8087";
    // let url = '';
    // if (time === '') {
    //     url = baseUrl;
    // }
    // else {
    //     url = baseUrl + `/SearchByTime/${time}`;
    // }
    // const response = await axios.get(url);
    return response.data;
})



export { fetchMovies };
export { fetchMoviesByTitle };
export { fetchMoviesByTime };



