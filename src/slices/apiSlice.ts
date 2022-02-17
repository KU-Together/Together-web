import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Card, ResponseResult } from 'constants/types'
import { URLS } from 'constants/urls'

export const cardApi = createApi({
  reducerPath: 'cardsApi',
  baseQuery: fetchBaseQuery({ baseUrl: URLS.together }),
  tagTypes: ['Cards'],
  endpoints: (builder) => ({
    getAllCards: builder.query<Card[], void>({
      query: () => '/cards',
      providesTags: (result) =>
        result
          ?
            [
              ...result.map(({ id }) => ({ type: 'Cards', id } as const)),
              { type: 'Cards', id: 'LIST' },
            ]
          :
            [{ type: 'Cards', id: 'LIST' }],
      }),
    addNewCard: builder.mutation<ResponseResult, Partial<Card>>({
      query: (body) => {
        return {
          url: '/cards',
          method: 'POST',
          body,
        }
      },
      invalidatesTags: [{ type: 'Cards', id: 'LIST' }],
    })
  }),
})

export const { 
  useGetAllCardsQuery,
  useAddNewCardMutation
} = cardApi