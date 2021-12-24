import Tag from 'components/atoms/Tag'
import KanbanCol from 'components/organisms/KanbanCol'
import React from 'react'
import styled from 'styled-components'

function MainPage() {
  const Container = styled.div`
    padding: 100px;  
  `

  const KanbanBoard = styled.div`
    display: flex;
    flex-direction: row;
  `

  return (
    <Container>
      <KanbanBoard>
        <KanbanCol status='To Do'/>
        <KanbanCol status='In Progress' />
        <KanbanCol status='Wait for Review' />
      </KanbanBoard>
    </Container>
  )
}

export default MainPage
