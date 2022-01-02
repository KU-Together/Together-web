import React from 'react'
import {
  Container,
  KanbanBoard
} from './MainTemplateStyles'
import KanbanCol from 'components/organisms/kanbanCol/KanbanCol'

function MainTemplate() {
  return (
    <Container>
      <KanbanBoard>
        {/* <KanbanCol 
          status='To Do' 
          cards={cards}
          insertACard={() => insertACard(cards, setCards)}
        /> */}
        <KanbanCol
          status='In Progress'
        // cards={cards}
        // insertACard={() => insertACard(cards, setCards)}
        />
        {/* <KanbanCol
          status='Wait for Review'
          cards={cards}
          insertACard={() => insertACard(cards, setCards)}
        /> */}
      </KanbanBoard>
    </Container>
  )
}

export default MainTemplate
