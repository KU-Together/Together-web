import { configureStore } from '@reduxjs/toolkit'
import { togetherApi } from 'slices/apiSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import cardsReducer from 'slices/cardSlice'

export const store = configureStore({
  reducer: {
    [togetherApi.reducerPath]: togetherApi.reducer,
    cards: cardsReducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(togetherApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch