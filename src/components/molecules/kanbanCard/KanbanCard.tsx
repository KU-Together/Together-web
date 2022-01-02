import { Card } from 'constants/types'
import { useAppDispatch } from 'hooks'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { update } from 'slices/cardSlice'
import styled, { css } from 'styled-components'
import {
  Container,
  Title,
  Property,
  PropertyRow,
  NameTag,
  Detail
} from './KanbanCardStyles'

interface Props {
  className?: string,
  cardInfo: Card,
}

function KanbanCard(props: Props) {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [title, setTitle] = useState(props.cardInfo.title)
  const [detail, setDetail] = useState(props.cardInfo.detail)
  const dispatch = useAppDispatch()

  // 이거 뭐지...?
  const saveChange = () => {
    setIsEditing(false)
    dispatch(update({
      ...props.cardInfo,
      title: title,
      detail: detail
    }))
  }

  return (
    <Container className={props.className} onClick={() => setIsEditing(true)}>
      <span onClick={() => saveChange()}>완료</span>
      <Title 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        readOnly={isEditing ? false : true}
      />

      <div>
        <Property>
          {props.cardInfo.endDate.toString()} 까지
        </Property>
      </div>

      <PropertyRow>
        <Property>
          매니저
        </Property>

        {props.cardInfo.manager.map(participantUser =>
          <NameTag
            key={'mngr' + participantUser.participantId}
            color={participantUser.color}
            tagName={participantUser.user.name}
          />
        )}
        
      </PropertyRow>

      <PropertyRow>
        <Property>
          수행자
        </Property>

        {props.cardInfo.assign.map(participantUser =>
          <NameTag
            key={'asgn' + participantUser.participantId}
            color={participantUser.color}
            tagName={participantUser.user.name}
          />
        )}
      </PropertyRow>

      <Detail
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
        readOnly={isEditing ? false : true}
      />
    </Container>
  )
}

export default KanbanCard
