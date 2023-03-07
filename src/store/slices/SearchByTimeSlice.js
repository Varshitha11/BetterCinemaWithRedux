import { createSlice } from '@reduxjs/toolkit';
import { fetchMoviesByTime} from '../thunks/fetchMovies';


const SearchByTimeSlice = createSlice({
    name : 'searchByTime',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    extraReducers(builder){
       builder.addCase(fetchMoviesByTime.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
   });

    }
});

export const searchByTimeReducer = SearchByTimeSlice.reducer;