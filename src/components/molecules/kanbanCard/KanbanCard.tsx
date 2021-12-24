import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import {
  Card,
  Title,
  Property,
  PropertyRow,
  NameTag,
  Detail
} from './styles'

interface Props {
  className?: string,
}

function KanbanCard(props: Props) {
  const [isEditing, setIsEditing] = useState<boolean>(false)

  return (
    <Card className={props.className} onClick={() => setIsEditing(true)}>
      <Title as="p" visibleLines={isEditing ? undefined : 2} onClick={() => {console.log('helloooo')}}>
        이것은 태스크명입니다.<br />
        태스크명 두줄<br />
        태스크명 세줄
      </Title>

      <div>
        <Property>
          2021.12.22 까지
        </Property>
      </div>

      <PropertyRow>
        <Property>
          매니저
        </Property>

        <NameTag
          color='pink'
          tagName='신지민'
        />
      </PropertyRow>

      <PropertyRow>
        <Property>
          수행자
        </Property>

        <NameTag
          color='pink'
          tagName='신지민'
        />

        <NameTag
          color='#DFBAF5'
          tagName='박종민'
        />

        <NameTag
          color='#CAEBCE'
          tagName='주권일'
        />
      </PropertyRow>

      <Detail visibleLines={isEditing ? undefined : 2}>
        태스크에 대한 설명입니다.<br />
        칸반보드 카드 만들기<br />
        칸반보드 카드 만들기<br />
        칸반보드 카드 만들기<br />
      </Detail>
    </Card>
  )
}

export default KanbanCard
