import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const bookings = createAsyncThunk('bookings/add', async ([bookingId,showId]) => {
    const response = await axios.post(`http://localhost:8087/bookTickets/${bookingId}/${showId}`,{
        bookingId,showId,
    });
    return response.data;
});


export {bookings};