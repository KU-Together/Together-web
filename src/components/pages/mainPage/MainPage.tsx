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

  function insertACard(cards: Card[], setCards: React.Dispatch<React.SetStateAction<Card[]>>) {
    const newCards = cards.slice()
    newCards.unshift({
      cardID: 'c1',
      projId: 'p1',
      title: '',
      endDate: new Date(),
      manager: [],
      assign: [],
      detail: ''
    })
    setCards(newCards)
  }

  return (
    <Container>
      <KanbanBoard>
        <KanbanCol 
          status='To Do' 
          cards={cards}
          insertACard={() => insertACard(cards, setCards)}
        />
        <KanbanCol
          status='In Progress'
          cards={cards}
          insertACard={() => insertACard(cards, setCards)}
        />
        <KanbanCol
          status='Wait for Review'
          cards={cards}
          insertACard={() => insertACard(cards, setCards)}
        />
      </KanbanBoard>
    </Container>
  )
}

export default MainPage
