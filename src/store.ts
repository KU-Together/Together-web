import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import cardsReducer from "slices/cardSlice";
import userReducer from "slices/userSlice";

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    user: userReducer,
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
