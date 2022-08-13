import { configureStore } from '@reduxjs/toolkit'
import driverwalletsSlice from './slices/driverwalletsSlice'
import driverdeductionsSlice from './slices/driverdeductionsSlice'
import busfaresSlice from './slices/busfareSlice'


export const store = configureStore({
  reducer: {
    driverwallets:driverwalletsSlice.reducer,
    driverdeductions:driverdeductionsSlice.reducer,
    busfares:busfaresSlice.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch