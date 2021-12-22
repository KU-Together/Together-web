import Tag from 'components/atoms/Tag'
import React from 'react'
import styled from 'styled-components'

function KanbanCard() {
  const Card = styled.div`
    display: inline-block;
    padding: 10px;
    border-radius: 10px;
    width: 350px;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.29);
  `

  const Title = styled.p`
    font-weight: bold;
    font-size: medium;
    margin: 0;
    padding: 0;
  `

  const Property = styled.span`
    font-size: small;
  `

  const Detail = styled.p`
    font-size: medium;
    margin: 0;
    padding: 0;
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

  return (
    <Card>
      <Title>이것은 태스크명입니다.<br />태스크명 두줄</Title>

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

      {/* <Detail>
        태스크에 대한 설명입니다.<br />
        칸반보드 카드 만들기
      </Detail> */}
    </Card>
  )
}

export default KanbanCard
