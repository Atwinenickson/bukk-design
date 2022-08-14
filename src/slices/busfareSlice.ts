import axios from 'axios';
import type { RootState } from '../store'
import { createSlice, createSelector, PayloadAction, createAsyncThunk, } from "@reduxjs/toolkit";


export interface Busfarestate {
  country: string;
  rate: number;
  discount: number;
  city: string;
  tax: number;
}



export const fetchBusFares = createAsyncThunk(
'user/fetchBusFares',  ()  => {
    return axios
      // .get('https://cors-anywhere.herokuapp.com/' + 'https://mock.bukkhl.work/v1/fare-prices')
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => response.data)
  })


const busfares: Busfarestate[] = []


const initialState = {
  loading: false,
  busfares: busfares,
  error: ''
}

const busfaresSlice = createSlice({
  name: 'busfares',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBusFares.pending, (state) => {
      state.busfares = [];
      state.loading = true;
    });
    builder.addCase(
      fetchBusFares.fulfilled, (state, { payload }) => {
        state.busfares = payload;
        state.loading = false;
        state.error = ''
      });
    builder.addCase(
      fetchBusFares.rejected, (state, action) => {
        state.loading = false
        state.busfares = []
        state.error = action.error.message!
      });
  }
})


export const selectBusFares = createSelector(
  (state: RootState) => ({
    busfares: state.busfares,
  }), (state) => state
);
export default busfaresSlice;