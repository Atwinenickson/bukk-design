// import { createSlice } from '@reduxjs/toolkit'
// import type {RootState} from '../store'

// export interface Driverdeductionstate {
//   country: string;
//   earnings: number;
//   driver: number;
//   city: string;
//   deductions: number;
// }

// const initialState: Driverdeductionstate[] = []

// export const driverdeductionsSlice = createSlice({
//   name: 'driverdeductions',
//   initialState,
//   reducers: {
//     getdeductions: (state) => {
//       state.push(
//         {
//           "country": "country",
//           "earnings": 6,
//           "driver": 1,
//           "city": "city",
//           "deductions": 1
//         }
//       )
//     },
//   },
// })

// // Action creators are generated for each case reducer function
// export const { getdeductions } = driverdeductionsSlice.actions

// // Selector to get deductions
// export const getDeductionValues =  (state: RootState) => state.driverdeductions

// export default driverdeductionsSlice.reducer




import axios from 'axios';
import type { RootState } from '../store'
import { createSlice, createSelector, PayloadAction, createAsyncThunk, } from "@reduxjs/toolkit";


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
      .get('https://jsonplaceholder.typicode.com/users')
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