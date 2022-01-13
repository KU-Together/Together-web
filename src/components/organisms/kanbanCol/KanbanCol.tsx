import { IMAGES } from 'constants/images'
import { useAppDispatch, useAppSelector } from 'hooks'
import React from 'react'
import { add } from 'slices/cardSlice'
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
}

function KanbanCol(props: Props) {
  const cards = useAppSelector(state => state.cards)
  const dispatch = useAppDispatch()

  return (
    <Column>
      <StatusRow>
        <Status>{props.status || ''}</Status>

        <AddBtn onClick={() => dispatch(add())}>
          <Icon src={IMAGES.add} />
        </AddBtn>
      </StatusRow>

      {cards.map(card => <WrappedCard key={card.id} cardInfo={card} />)}
    </Column>
  )
}

export default KanbanCol
