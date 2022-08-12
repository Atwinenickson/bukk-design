import { configureStore } from '@reduxjs/toolkit'
import driverwalletsReducer from './slices/driverwalletsSlice'
import driverdeductionsReducer from './slices/driverdeductionsSlice'

export const store = configureStore({
  reducer: {
    driverwallets:driverwalletsReducer,
    driverdeductions:driverdeductionsReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch