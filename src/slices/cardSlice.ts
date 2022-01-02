import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { cardData } from 'assets/data/sampleData'
import { Card, CardId } from 'constants/types'
import { RootState } from 'store'

const initialState: Card[] = cardData

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<Card>) => {
      const cardId = action.payload.cardId
      const idx = state.findIndex((elem) => elem.cardId === cardId)
      state[idx] = {
        ...state[idx],
        ...action.payload
      }
    },
  }
})

export const { update } = cardsSlice.actions
export const selectCards = (state: RootState) => state.cards
export default cardsSlice.reducer