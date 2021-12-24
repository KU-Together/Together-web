import { Card } from 'constants/types'
import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import {
  Container,
  Title,
  Property,
  PropertyRow,
  NameTag,
  Detail
} from './styles'

interface Props {
  className?: string,
  cardInfo: Card,
}

function KanbanCard(props: Props) {
  const [isEditing, setIsEditing] = useState<boolean>(false)

  return (
    <Container className={props.className} onClick={() => setIsEditing(true)}>
      <Title as="p" visibleLines={isEditing ? undefined : 2} onClick={() => {console.log('helloooo')}}>
        {props.cardInfo.title}
      </Title>

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

      <Detail visibleLines={isEditing ? undefined : 2}>
        {props.cardInfo.detail}
      </Detail>
    </Container>
  )
}

export default KanbanCard
