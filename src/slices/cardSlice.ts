import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { cardData } from 'assets/data/sampleData'
import { Card, CardId } from 'constants/types'
import { RootState } from 'store'
import { nanoid } from '@reduxjs/toolkit'

const initialState: Card[] = cardData

const defaultCard: Card = {
  cardId: '',
  projId: 'p1',
  title: '',
  endDate: new Date(),
  manager: [],
  assign: [],
  detail: ''
}

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<Card>) => {
      const cardId = action.payload.cardId
      const idx = state.findIndex((elem) => elem.cardId === cardId)
      state[idx] = {...action.payload}
    },
    add: {
      reducer: (state, action: PayloadAction<Card[]>) => {
        for (let card of action.payload) {
          state.unshift({
            ...card,
            cardId: nanoid(),
            endDate: new Date(),
          })
        }
      },
      prepare: (value?: Card[]) => ({ payload: value || [defaultCard]})
    }
  }
})

export const { update, add } = cardsSlice.actions
export const selectCards = (state: RootState) => state.cards
export default cardsSlice.reducer