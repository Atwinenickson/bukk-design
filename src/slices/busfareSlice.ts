import { createSlice } from '@reduxjs/toolkit'
import type {RootState} from '../store'

export interface Busfarestate {
  country: string;
  rate: number;
  discount: number;
  city: string;
  tax: number;
}

const initialState: Busfarestate[] = []

export const busfaresSlice = createSlice({
  name: 'busfares',
  initialState,
  reducers: {
    getbusfares: (state) => {
      state.push(
        {
          "country": "country",
          "rate": 6,
          "discount": 1,
          "city": "city",
          "tax": 1
        }
      )
    },
  },
})

// Action creators are generated for each case reducer function
export const { getbusfares } = busfaresSlice.actions

// Selector to get deductions
export const getBusFareValues =  (state: RootState) => state.busfares

export default busfaresSlice.reducer