import KanbanCard from 'components/molecules/KanbanCard'
import React from 'react'
import styled from 'styled-components'

function MainPage() {
  const Container = styled.div`
    padding: 100px;  
  `

  return (
    <Container>
      <KanbanCard />
    </Container>
  )
}

export default MainPage
