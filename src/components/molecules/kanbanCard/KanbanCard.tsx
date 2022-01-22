import { Card } from 'constants/types'
import { useAppDispatch } from 'hooks'
import React, { useState } from 'react'
import { update } from 'slices/cardSlice'
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
  const [detail, setDetail] = useState(props.cardInfo.content)
  const dispatch = useAppDispatch()

  const saveChange = () => {
    setIsEditing(false)
    dispatch(update({
      ...props.cardInfo,
      title: title,
      content: detail
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
          {props.cardInfo.deadline.toString()} 까지
        </Property>
      </div>

      <PropertyRow>
        <Property>
          매니저
        </Property>

        {props.cardInfo.manager_id.map(user => 
          <NameTag
            key={'mngr' + user.userId}
            // color={participantUser.color}
            tagName={user.name}
          />  
        )}
        
      </PropertyRow>

      <PropertyRow>
        <Property>
          수행자
        </Property>

        {props.cardInfo.assigned_users.map(participantUser =>
          <NameTag
            key={'asgn' + participantUser}
            // color={participantUser.color}
            tagName={participantUser.name}
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
