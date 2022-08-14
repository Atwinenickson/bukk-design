import axios from 'axios';
import type { RootState } from '../store'
import { createSlice, createSelector, createAsyncThunk, } from "@reduxjs/toolkit";


export interface Driverdeductionstate {
  country: string;
  earnings: number;
  driver: number;
  city: string;
  deductions: number;
}




export const fetchDeductions = createAsyncThunk(
'user/fetchDeductions',  ()  => {
    return axios
      .get('https://cors-anywhere.herokuapp.com/' + 'https://mock.bukkhl.work/v1/driver-transactions')
      .then(response => response.data)
  })


const driverdeductions: Driverdeductionstate[] = []


const initialState = {
  loading: false,
  driverdeductions: driverdeductions,
  error: ''
}

const driverdeductionsSlice = createSlice({
  name: 'driverdeductions',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDeductions.pending, (state) => {
      state.driverdeductions = [];
      state.loading = true;
    });
    builder.addCase(
      fetchDeductions.fulfilled, (state, { payload }) => {
        state.driverdeductions = payload;
        state.loading = false;
        state.error = ''
      });
    builder.addCase(
      fetchDeductions.rejected, (state, action) => {
        state.loading = false
        state.driverdeductions = []
        state.error = action.error.message!
      });
  }
})


export const selectDeductions = createSelector(
  (state: RootState) => ({
    driverdeductions: state.driverdeductions,
  }), (state) => state
);
export default driverdeductionsSlice;