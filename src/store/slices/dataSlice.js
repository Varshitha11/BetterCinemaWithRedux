import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bookSeat: {
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
  }
}

export const dataSlice = createSlice({
  name: 'reserveSeat',
  initialState,
  reducers: {
    reserveSeat: (state, action) => {
      state.bookSeat = action.payload;
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
  },
})


export const { reserveSeat, saveSeat ,saveShows ,setSearch} = dataSlice.actions

export default dataSlice.reducer
