import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const bookings = createAsyncThunk('bookings/add', async ([seatId,showId]) => {
    const response = await axios.post(`http://localhost:8087/bookTickets/${seatId}/${showId}`,{
        seatId,showId,
    });
    return response.data;
});


export {bookings};