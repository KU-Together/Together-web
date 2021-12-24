import styled from 'styled-components'
import KanbanCard from 'components/molecules/kanbanCard/KanbanCard'

export const Column = styled.div`
    display: flex;
    flex-direction: column;
  `

export const StatusRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 30px;
    margin-bottom: 6px;
  `

export const Status = styled.span`
    font-size: medium;
    font-weight: bold;
  `

export const Card = styled(KanbanCard)`
    margin-top: 6px;
    margin-bottom: 6px;
    margin-left: 25px;
    margin-right: 25px;
  `

export const AddBtn = styled.div`
    width: 22px;
    height: 22px;
    background-color: pink;
  `