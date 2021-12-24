import Tag from 'components/atoms/tag/Tag'
import KanbanCol from 'components/organisms/kanbanCol/KanbanCol'
import React from 'react'
import {
  Container,
  KanbanBoard
} from './styles'

function MainPage() {
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
