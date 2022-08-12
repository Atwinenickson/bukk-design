import { createSlice } from '@reduxjs/toolkit'
import type {RootState} from '../store'

export interface Driverdeductionstate {
  country: string;
  earnings: number;
  driver: number;
  city: string;
  deductions: number;
}

const initialState: Driverdeductionstate[] = []

export const driverdeductionsSlice = createSlice({
  name: 'driverdeductions',
  initialState,
  reducers: {
    getdeductions: (state) => {
      state.push(
        {
          "country": "country",
          "earnings": 6,
          "driver": 1,
          "city": "city",
          "deductions": 1
        }
      )
    },
  },
})

// Action creators are generated for each case reducer function
export const { getdeductions } = driverdeductionsSlice.actions

// Selector to get deductions
export const getDeductionValues =  (state: RootState) => state.driverdeductions

export default driverdeductionsSlice.reducer