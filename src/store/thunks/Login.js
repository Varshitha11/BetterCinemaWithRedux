import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const loginPost = createAsyncThunk('login/authenticate', async (data) => {
    const response = await axios.post("http://localhost:8089/authenticate", {
        userName: data.username,
        userPassword: data.password,
    });window.location.href = '/home'
    return response.data;
});

const RegisterUser = createAsyncThunk('register/user', async (data) => {
    const response = await axios.post("http://localhost:8089/registerNewUser", {
        userName: data.username,
        userFirstName: data.firstName,
        userLastName: data.lastName,
        userPassword: data.password,
    });window.location.href = '/login'
    return response.data;
});

export { loginPost };
export {RegisterUser};