import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card, CardId, ProjectId } from "constants/types";
import { RootState } from "store";
import { URLS } from "constants/urls";

interface CardsState {
  state: "idle" | "loading" | "succeeded" | "create-succeeded" | "failed";
  error: string | null;
  value: Card[];
}

const initialState: CardsState = {
  state: "idle",
  error: null,
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

    if (response.status !== 201) {
      throw response.status;
    }

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
    builder.addCase(fetchAllCards.pending, (state, action) => {
      state.state = "loading";
    });
    builder.addCase(fetchAllCards.fulfilled, (state, action) => {
      state.state = "succeeded";
      state.value = action.payload;
    });
    builder.addCase(fetchAllCards.rejected, (state, action) => {
      state.state = "failed";
    });
    builder.addCase(createCard.pending, (state, action) => {
      state.state = "loading";
    });
    builder.addCase(createCard.fulfilled, (state, action) => {
      state.state = "create-succeeded";
    });
    builder.addCase(createCard.rejected, (state, action) => {
      state.state = "failed";
      console.error(action.error);
    });
  },
});

export const { update } = cardsSlice.actions;
export const selectCards = (state: RootState) => state.cards.value;
export const selectState = (state: RootState) => state.cards.state;
export default cardsSlice.reducer;
