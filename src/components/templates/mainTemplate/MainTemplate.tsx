import React from 'react'
import {
  Container,
  KanbanBoard
} from './MainTemplateStyles'
import { cardData } from 'assets/data/sampleData'
import Tag from 'components/atoms/tag/Tag'
import KanbanCol from 'components/organisms/kanbanCol/KanbanCol'
import { Card } from 'constants/types'

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
