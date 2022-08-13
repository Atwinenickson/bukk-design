import axios from 'axios';
import type {RootState} from '../store'
import { createSlice,createSelector,PayloadAction,createAsyncThunk,} from "@reduxjs/toolkit";


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
  "drivers/fetchWallets", async (_, thunkAPI) => {
     try {
        const response = await axios.get('https://mock.bukkhl.work/v1/wallets');//where you want to fetch data
        return await response.data;
      } catch (error:any) {
         return thunkAPI.rejectWithValue({ error: error.message });
      }
});


const driverwallets:DriverWalletState[] = []

 const driverwalletsSlice = createSlice({
  name: 'driverwallets',
  initialState: {
    driverwallets,
    loading: "idle",
    error: "",
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWallets.pending, (state) => {
      state.driverwallets = [];
        state.loading = "loading";
    });
    builder.addCase(
       fetchWallets.fulfilled, (state, { payload }) => {
          state.driverwallets = payload;
          state.loading = "loaded";
    });
    builder.addCase(
      fetchWallets.rejected,(state) => {
          state.loading = "error";
          state.error = "error";
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
  }), (state) =>  state
);
export default driverwalletsSlice;