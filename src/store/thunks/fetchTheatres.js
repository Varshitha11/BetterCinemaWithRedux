import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const fetchTheatres = createAsyncThunk('theatres/fetch', async () => {
    const response = await axios.get('http://localhost:8087/getAllTheatres');
    return response.data;
});


const fetchTheatresByMovie = createAsyncThunk('theatresByMovie/fetch', async (id) => {
    const response = await axios.get(`http://localhost:8087/getTheatreByMovieId/${id}`);
    return response.data;
});

const fetchScreens = createAsyncThunk('screens/fetch', async (showId) => {
    const response = await axios.get(`http://localhost:8087/getScreenFromShow/${showId}`);
    return response.data;
});

export {fetchTheatres};
export {fetchTheatresByMovie};
export{fetchScreens};