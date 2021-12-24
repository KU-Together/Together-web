import { IMAGES } from 'constants/images'
import { Card } from 'constants/types'
import React from 'react'
import {
  Column,
  StatusRow,
  Status,
  AddBtn,
  WrappedCard,
  Icon
} from './styles'

interface Props {
  status?: string,
  cards: Card[],
}

function KanbanCol(props: Props) {
  return (
    <Column>
      <StatusRow>
        <Status>{props.status || ''}</Status>
        <AddBtn>
          <Icon src={IMAGES.add} />
        </AddBtn>
      </StatusRow>

      {props.cards.map(card => <WrappedCard key={card.cardID} cardInfo={card} />)}
    </Column>
  )
}

export default KanbanCol
