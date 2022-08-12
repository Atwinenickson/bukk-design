import { createSlice } from '@reduxjs/toolkit'
import type {RootState} from '../store'

export interface DriverWalletState {
  country: string;
  earnings: number;
  trips: number;
  name: string;
  status: string;
}

const initialState: DriverWalletState[] = []

export const driverwalletsSlice = createSlice({
  name: 'driverwallets',
  initialState,
  reducers: {
    getwallets: (state) => {
      state.push(
        {
          "country": "South Africa",
          "earnings": 1021.23,
          "trips": 22,
          "name": "James Doe",
          "status": "active"
        }
      )
    },
  },
})

// Action creators are generated for each case reducer function
export const { getwallets } = driverwalletsSlice.actions

// Selector to get wallets
export const getWalletValues =  (state: RootState) => state.driverwallets

export default driverwalletsSlice.reducer