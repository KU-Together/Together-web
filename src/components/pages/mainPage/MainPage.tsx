import MainTemplate from 'components/templates/mainTemplate/MainTemplate'
import { useEffect } from 'react'
import { useAppDispatch } from 'hooks'
import { fetchAllCards } from 'slices/cardSlice'
import { cardApi, useGetAllCardsQuery } from 'slices/apiSlice'

function MainPage() {
  const { data, error, isLoading } = useGetAllCardsQuery()
  console.log('data', data, 'error', error, 'isLoading')
  
  useEffect(() => {
  }, [])

  return (
    <MainTemplate
      cardData={data || []}
    />
  )
}

export default MainPage
