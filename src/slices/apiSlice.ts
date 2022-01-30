import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Card, ResponseResult } from 'constants/types'
import { URLS } from 'constants/urls'

export const cardApi = createApi({
  reducerPath: 'togetherApi',
  baseQuery: fetchBaseQuery({ baseUrl: URLS.together }),
  endpoints: (builder) => ({
    getAllCards: builder.query<Card[], void>({
      query: () => ({
        url: '/cards',
        method: 'GET',
        headers: {
          'accept': 'application/json'
        }
      }),
    }),
    addNewCard: builder.mutation<ResponseResult, Partial<Card>>({
      query: initialCard => ({
        url: '/cards',
        method: 'POST',
        body: initialCard
      })
    })
  }),
})

export const { 
  useGetAllCardsQuery,
  useAddNewCardMutation
} = cardApi