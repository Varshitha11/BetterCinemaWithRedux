import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const bookings = createAsyncThunk('bookings/add', async ([seatId,showId,userName]) => {
    const response = await axios.post(`http://localhost:8087/bookTickets/${seatId}/${showId}/${userName}`,{
        seatId,showId,
    });
    return response.data;
});

const fetchOrders = createAsyncThunk('orders/fetch', async (userName) => {
    const response = await axios.get(`http://localhost:8087/booking/${userName}`,{
    });
    return response.data;
});

const fetchMovieByUserName =  createAsyncThunk('movieByUserName/fetch', async (userName) => {
    const response = await axios.get(`http://localhost:8087/moviesByUserName/${userName}`,{
    });
    return response.data;
});

export {bookings};
export { fetchOrders };
export {fetchMovieByUserName};