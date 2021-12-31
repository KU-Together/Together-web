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
} from './KanbanCardStyles'

interface Props {
  className?: string,
  cardInfo: Card,
}

function KanbanCard(props: Props) {
  const [isEditing, setIsEditing] = useState<boolean>(false)

  return (
    <Container className={props.className} onClick={() => setIsEditing(true)}>
      <Title 
        value={props.cardInfo.title}
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
        value={props.cardInfo.detail}
        readOnly={isEditing ? false : true}
      />
    </Container>
  )
}

export default KanbanCard
