import axios from 'axios';
import type { RootState } from '../store'
import { createSlice, createSelector, PayloadAction, createAsyncThunk, } from "@reduxjs/toolkit";


export interface DriverWalletState {
  country: string;
  earnings: number;
  trips: number;
  name: string;
  status: string;
  // loading?: string;
  // error?: string;
}




export const fetchWallets = createAsyncThunk(
  // "drivers/fetchWallets", async (_, thunkAPI) => {
  //   try {
  //   const url = "https://mock.bukkhl.work/v1/wallets";
  //   var headers = {
  //   }
  //   // { mode: 'no-cors'}
    
  //   const res = await fetch(url, {
  //       method : "GET",
  //       mode: 'no-cors',
  //       headers: headers
  //   })

  //   const jsonData = await res.json();
  //   console.log('json')
  //   console.log(jsonData)

  // return jsonData
'user/fetchUsers',  async (_, thunkAPI)  => {
    // return axios
    //   .get('https://mock.bukkhl.work/v1/wallets')
    //   .then(response => response.data)

    const url = "https://mock.bukkhl.work/v1/wallets";
    var headers = {
    }
 //   // { mode: 'no-cors'}
   
   const res = await fetch(url, {
        method : "GET",
        mode: 'no-cors',
       headers: headers
  })

 const jsonData = await res.json();
 console.log('json')
    console.log(jsonData)

 return jsonData
  })

  //   } catch (error: any) {
  //     return thunkAPI.rejectWithValue({ error: error.message });
  //   }
  // });


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

// Action creators are generated for each case reducer function
// export const { getwallets } = driverwalletsSlice.actions

// export const selectAllDrivers = ({state}: {state: driverwallets}) => state.driverwallets.driverwallets


// Selector to get wallets
// export const getWalletValues =  (state: RootState) => state.driverwallets

// export default driverwalletsSlice.reducer

export const selectWallets = createSelector(
  (state: RootState) => ({
    wallets: state.driverwallets,
    //  loading: state.loading,
  }), (state) => state
);
export default driverwalletsSlice;