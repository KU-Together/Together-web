import { IMAGES } from 'constants/images'
import React from 'react'
import {
  Column,
  StatusRow,
  Status,
  AddBtn,
  Card
} from './styles'

interface Props {
  status?: string,
}

function KanbanCol(props: Props) {
  return (
    <Column>
      <StatusRow>
        <Status>{props.status || ''}</Status>
        <AddBtn>
          {/* <img src={IMAGES.add} /> */}
        </AddBtn>
      </StatusRow>

      <Card />
      <Card />
      <Card />
    </Column>
  )
}

export default KanbanCol
