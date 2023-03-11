import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movieData: {
    value: null
  },
  theatreData : {
    value : null
  }
}

export const saveDataSlice = createSlice({
  name: 'alldata',
  initialState,
  reducers: {
    saveMovie: (state, action) => {
      state.movieData = action.payload;
    },
    saveTheatre: (state, action) => {
      state.theatreData = action.payload;
    },
  },
})


export const { saveMovie , saveTheatre} = saveDataSlice.actions

export default saveDataSlice.reducer
