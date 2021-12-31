import { IMAGES } from 'constants/images'
import { Card } from 'constants/types'
import { useAppSelector } from 'hooks'
import React from 'react'
import {
  Column,
  StatusRow,
  Status,
  AddBtn,
  WrappedCard,
  Icon
} from './KanbanStyles'

interface Props {
  status?: string,
  // cards: Card[],
  // insertACard: () => void,
}

function KanbanCol(props: Props) {
  const cards = useAppSelector(state => state.cards)

  return (
    <Column>
      <StatusRow>
        <Status>{props.status || ''}</Status>
        {/* <AddBtn onClick={props.insertACard}> */}
        <AddBtn onClick={() => {console.log('hello!!')}}>
          <Icon src={IMAGES.add} />
        </AddBtn>
      </StatusRow>

      {/* {props.cards.map(card => <WrappedCard key={card.cardID} cardInfo={card} />)} */}
      {cards.map(card => <WrappedCard key={card.cardID} cardInfo={card} />)}
    </Column>
  )
}

export default KanbanCol
