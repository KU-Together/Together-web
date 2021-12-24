import { Bold } from 'styles/typography'
import Tag from 'components/atoms/Tag'
import React, { useState } from 'react'
import styled, { css } from 'styled-components'

interface Props {
  className?: string,
}

const hoverCursor =  css`
  &:hover {
    cursor: grab;
  }
`

const Card = styled.div`
    ${hoverCursor}
    display: inline-block;
    padding: 15px;
    border-radius: 10px;
    width: 350px;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.29);
  `

interface Title {
  visibleLines?: number,
}

const Title = styled(Bold)<Title>`
    font-size: medium;
    margin: 0;
    padding: 0;
    -webkit-line-clamp: ${props => props.visibleLines};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  `

const Property = styled.span`
    font-size: small;
  `

interface Detail {
  visibleLines?: number
}

const Detail = styled.p<Detail>`
    font-size: medium;
    margin: 15px 0 0 0;
    padding: 0;
    -webkit-line-clamp: ${props => props.visibleLines};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  `

const PropertyRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 3px;
    margin-bottom: 3px;
  `

const NameTag = styled(Tag)`
    margin-left: 3px;
    margin-right: 3px;
  `

function KanbanCard(props: Props) {
  const [isEditing, setIsEditing] = useState<boolean>(false)

  return (
    <Card className={props.className} onClick={() => setIsEditing(true)}>
      <Title as="p" visibleLines={isEditing ? undefined : 2}>
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
