import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchTheatres = createAsyncThunk('theatres/fetch', async () => {
    const response = await axios.get('http://localhost:8087/getAllTheatres');

    return response.data;
});

export {fetchTheatres};