import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movieData: {
    value: null
  },
  search: {
    value: null
  },
  saveSeat: {
    value: null
  },
  saveShows: {
    value: null
  },
  getuser : {
    value :[]
  },
 
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    saveMovie: (state, action) => {
      state.movieData = action.payload;
    },
    saveSeat: (state, action) => {
      state.saveSeat = action.payload;
    },
    saveShows: (state, action) => {
      state.saveShows = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    getUser: (state,action) => {
      state.getuser = action.payload;
    },
    
  },
})


export const {saveMovie, saveSeat ,saveShows ,setSearch , getUser} = dataSlice.actions

export default dataSlice.reducer
