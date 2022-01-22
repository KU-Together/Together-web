import { IMAGES } from 'constants/images'
import { Card } from 'constants/types'
import { useAppDispatch, useAppSelector } from 'hooks'
import React from 'react'
import { useAddNewCardMutation } from 'slices/apiSlice'
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
  cards: Card[],
}

function KanbanCol(props: Props) {
  const [addNewCard, { isLoading }] = useAddNewCardMutation()

  return (
    <Column>
      <StatusRow>
        <Status>{props.status || ''}</Status>

        <AddBtn onClick={() => addNewCard({
          project_id: 1,
          title: '',
          manager_id: [1],
          status: '1',
          content: '',
          assigned_users: []
        })}>
          <Icon src={IMAGES.add} />
        </AddBtn>
      </StatusRow>

      {props.cards.map(card => <WrappedCard key={card.id} cardInfo={card} />)}
    </Column>
  )
}

export default KanbanCol
