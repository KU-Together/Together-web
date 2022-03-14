import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card, CardId, CardStatus, ProjectId, UserId } from "constants/types";
import { RootState } from "store";
import { URLS } from "constants/urls";

type KanbanCards = { [key: string]: Card[] };

type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

interface CardsState {
  state:
    | "idle"
    | "loading"
    | "succeeded"
    | "create-succeeded"
    | "modify-succeeded"
    | "failed";
  error: string | null;
  value: KanbanCards;
}

export const cardStatus: CardStatus[] = [
  "to-do",
  "in-progress",
  "completed",
  "terminated",
];

const initialState: CardsState = {
  state: "idle",
  error: null,
  value: cardStatus.reduce(
    (prevObj, status) => ({ ...prevObj, [status]: [] }),
    {}
  ),
};

export const fetchAllCards = createAsyncThunk(
  "cards/fetchAll",
  async (userId: UserId): Promise<KanbanCards> => {
    const boardId = 1;
    const allCards: KanbanCards = {};

    for (const status of cardStatus) {
      try {
        const response = await fetch(
          URLS.together +
            `user/${userId}/board/${boardId}/status/${status}/card`
        );
        allCards[status] = await response.json();
      } catch (error) {
        allCards[status] = [];
      }
    }

    return allCards;
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

export const modifyCard = createAsyncThunk(
  "cards/modify",
  async (card: PartialBy<Card, "emoji">): Promise<Card | undefined> => {
    try {
      const boardId = 1;
      delete card.emoji;

      const response = await fetch(
        URLS.together +
          `user/${card.user_id}/board/${boardId}/status/${card.status}/card/${card.id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(card),
        }
      );

      if (response.status !== 200) {
        const msg = await response.text();
        throw response.status + " " + msg;
      }

      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }
);

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
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
    builder.addCase(modifyCard.pending, (state, action) => {
      state.state = "loading";
    });
    builder.addCase(modifyCard.fulfilled, (state, action) => {
      state.state = "modify-succeeded";
      const card = action.payload;
      if (card) {
        state.value[card.status].forEach((elem, idx) => {
          if (elem.id === card.id) {
            state.value[card.status][idx] = card;
          }
        });
      }
    });
    builder.addCase(modifyCard.rejected, (state, action) => {
      state.state = "failed";
    });
  },
});

export const {} = cardsSlice.actions;
export const selectCards = (state: RootState) => state.cards.value;
export const selectState = (state: RootState) => state.cards.state;
export default cardsSlice.reducer;
