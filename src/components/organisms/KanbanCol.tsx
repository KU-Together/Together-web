import KanbanCard from 'components/molecules/KanbanCard'
import { IMAGES } from 'constants/images'
import React from 'react'
import styled from 'styled-components'

interface Props {
  status?: string,
}

function KanbanCol(props: Props) {
  const Column = styled.div`
    display: flex;
    flex-direction: column;
  `
  
  const StatusRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 30px;
    margin-bottom: 6px;
  `

  const Status = styled.span`
    font-size: medium;
    font-weight: bold;
  `

  const Card = styled(KanbanCard)`
    margin-top: 6px;
    margin-bottom: 6px;
    margin-left: 25px;
    margin-right: 25px;
  `

  const AddBtn = styled.div`
    width: 22px;
    height: 22px;
    background-color: pink;
  `

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
