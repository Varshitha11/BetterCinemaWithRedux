import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';




const fetchShowsById = createAsyncThunk('show/fetch', async ([id,theatreId,time]) => {
    const response = await axios.get(`http://localhost:8087/getShowsByMovieTheatreAndTime/${id}/${theatreId}/${time}`);
    return response.data;
});


export {fetchShowsById};
