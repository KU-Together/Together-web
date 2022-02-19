import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card, CardId, ProjectId } from "constants/types";
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

export const fetchAllCards = createAsyncThunk(
  "cards/fetchAll",
  async (projectId: ProjectId): Promise<Card[]> => {
    const response = await fetch(URLS.together + `project-card/${projectId}`);
    const cards = await response.json();
    return cards;
  }
);

export const createCard = createAsyncThunk(
  "cards/create",
  async (card: Omit<Card, "user" | "id">): Promise<Card> => {
    const response = await fetch(URLS.together + "card", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(card),
    });

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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllCards.fulfilled, (state, action) => {
      state.value = action.payload;
    });
    builder.addCase(createCard.pending, (state, action) => {
      // console.log(action.meta.arg);
    });
    builder.addCase(createCard.fulfilled, (state, action) => {
      state.value.push(action.payload);
    });
    builder.addCase(createCard.rejected, (state, action) => {
      console.log(action.payload);
      console.error(action.error);
    });
  },
});

export const { update } = cardsSlice.actions;
export const selectCards = (state: RootState) => state.cards.value;
export default cardsSlice.reducer;
