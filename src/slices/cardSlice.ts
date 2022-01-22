import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Card, CardId } from 'constants/types'
import { RootState } from 'store'
import { URLS } from 'constants/urls'

const initialState: Card[] = []

const defaultCard: Card = {
  id: 0,
  project_id: 1,
  title: '태스크 타이틀',
  deadline: new Date(),
  status: '진행 중',
  manager_id: 1,
  assigned_users: [],
  content: '태스크 디테일'
}

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<Card>) => {
      const cardId = action.payload.id
      const idx = state.findIndex((elem) => elem.id === cardId)
      state[idx] = {...action.payload}
    },
    add: {
      reducer: (state, action: PayloadAction<Card[]>) => {
        for (let card of action.payload) {
          state.unshift({
            ...card,
            id: 1,
            deadline: new Date(),
          })
        }
      },
      prepare: (value?: Card[]) => ({ payload: value || [defaultCard]})
    },
    fetchAllCards: () => {
      const response = fetch(URLS.together + 'api/cards')
      console.log()
    }
  }
})

export const { update, add, fetchAllCards } = cardsSlice.actions
export const selectCards = (state: RootState) => state.cards
export default cardsSlice.reducer