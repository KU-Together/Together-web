import { createSlice } from '@reduxjs/toolkit'
import { cardData } from 'assets/data/sampleData'
import { Card } from 'constants/types'
import { RootState } from 'store'

const initialState: Card[] = cardData

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {}
})

export const selectCards = (state: RootState) => state.cards
export default cardsSlice.reducer