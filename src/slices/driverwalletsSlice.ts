import axios from 'axios';
import type { RootState } from '../store'
import { createSlice, createSelector, PayloadAction, createAsyncThunk, } from "@reduxjs/toolkit";


export interface DriverWalletState {
  country: string;
  earnings: number;
  trips: number;
  name: string;
  status: string;
}

const config = {  
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json",
    },
    mode: "no-cors",
};


export const fetchWallets = createAsyncThunk(
'user/fetchWallets',  ()  => {
    return axios
      .get( 'https://fast-dawn-89938.herokuapp.com/https://mock.bukkhl.work/v1/wallets')
      .then(response => response.data)

//     const url = "https://mock.bukkhl.work/v1/wallets";
//     var headers = {
//     }
   
//    const res = await fetch(url, {
//         method : "GET",
//         mode: 'no-cors',
//        headers: headers
//   })

//  const jsonData = await res.json();
//  console.log('json')
//     console.log(jsonData)

//  return jsonData
  })


const driverwallets: DriverWalletState[] = []

const initialState = {
  loading: false,
  driverwallets: driverwallets,
  error: ''
}

const driverwalletsSlice = createSlice({
  name: 'driverwallets',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWallets.pending, (state) => {
      state.driverwallets = [];
      state.loading = true;
    });
    builder.addCase(
      fetchWallets.fulfilled, (state, { payload }) => {
        state.driverwallets = payload;
        state.loading = false;
        state.error = ''
      });
    builder.addCase(
      fetchWallets.rejected, (state, action) => {
        state.loading = false
        state.driverwallets = []
        state.error = action.error.message!
      });
  }
})


export const selectWallets = createSelector(
  (state: RootState) => ({
    wallets: state.driverwallets,
  }), (state) => state
);
export default driverwalletsSlice;