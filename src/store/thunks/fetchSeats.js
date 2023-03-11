import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const fetchSeats = createAsyncThunk('seats/fetch', async (showId) => {
    const response = await axios.get(`http://localhost:8087/getSeats/${showId}`);
    return response.data;
});


export {fetchSeats};
