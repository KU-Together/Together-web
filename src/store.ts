import { configureStore } from '@reduxjs/toolkit'
import { cardApi } from 'slices/apiSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import cardsReducer from 'slices/cardSlice'

export const store = configureStore({
  reducer: {
    [cardApi.reducerPath]: cardApi.reducer,
    cards: cardsReducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(cardApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch