import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card, CardId } from "constants/types";
import { RootState } from "store";
import { URLS } from "constants/urls";

interface CardsState {
  state: "";
  value: Card[];
}

const initialState: CardsState = {
  state: "",
  value: [],
};

const now = new Date();

const defaultCard: Card = {
  id: 0,
  project_id: 1,
  title: "태스크 타이틀",
  deadline: now.toString(),
  status: "진행 중",
  manager_id: [],
  assigned_users: [],
  content: "태스크 디테일",
};

export const fetchAllCards = createAsyncThunk(
  "card/fetchAll",
  async (): Promise<Card[]> => {
    const response = await fetch(URLS.together + "card");
    return response.json();
  }
);

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    update: (state, action: PayloadAction<Card>) => {
      const cardId = action.payload.id;
      const idx = state.value.findIndex((elem) => elem.id === cardId);
      state.value[idx] = { ...action.payload };
    },
    add: {
      reducer: (state, action: PayloadAction<Card[]>) => {
        for (let card of action.payload) {
          state.value.unshift({
            ...card,
            id: 1,
            deadline: now.toString(),
          });
        }
      },
      prepare: (value?: Card[]) => ({ payload: value || [defaultCard] }),
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllCards.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export const { update, add } = cardsSlice.actions;
export const selectCards = (state: RootState) => state.cards.value;
export default cardsSlice.reducer;
