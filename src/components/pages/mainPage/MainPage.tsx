import { cardData } from 'assets/data/sampleData'
import Tag from 'components/atoms/tag/Tag'
import KanbanCol from 'components/organisms/kanbanCol/KanbanCol'
import { Card } from 'constants/types'
import React, { useState } from 'react'
import {
  Container,
  KanbanBoard
} from './styles'

function MainPage() {
  const [cards, setCards] = useState<Card[]>(cardData)

  return (
    <Container>
      <KanbanBoard>
        <KanbanCol status='To Do' cards={cards}/>
        <KanbanCol status='In Progress' cards={cards}/>
        <KanbanCol status='Wait for Review' cards={cards}/>
      </KanbanBoard>
    </Container>
  )
}

export default MainPage
