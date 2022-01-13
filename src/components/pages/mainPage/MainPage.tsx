import MainTemplate from 'components/templates/mainTemplate/MainTemplate'
import { useEffect } from 'react'

function MainPage() {
  useEffect(() => {
    // 리덕스 저장소에 카드 데이터 받아오기
  }, [])

  return (
    <MainTemplate />
  )
}

export default MainPage
