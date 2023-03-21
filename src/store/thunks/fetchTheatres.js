import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const fetchTheatres = createAsyncThunk('theatres/fetchTheatres', async () => {
    const response = await axios.get('http://localhost:8087/getAllTheatres');
    return response.data;
});


const fetchTheatresByMovie = createAsyncThunk('theatres/fetchTheatresByMovie', async (id) => {
    const response = await axios.get(`http://localhost:8087/getTheatreByMovieId/${id}`);
    return response.data;
});

const fetchScreens = createAsyncThunk('screens/fetchScreens', async (showId) => {
    const response = await axios.get(`http://localhost:8087/getScreenFromShow/${showId}`);
    return response.data;
});

export {fetchTheatres};
export {fetchTheatresByMovie};
export{fetchScreens};