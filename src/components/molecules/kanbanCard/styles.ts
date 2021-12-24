import styled, { css } from 'styled-components'
import { Bold } from 'styles/typography'
import Tag from 'components/atoms/tag/Tag'

export const hoverCursor = css`
  &:hover {
    cursor: grab;
  }
`

export const Container = styled.div`
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

export const Title = styled(Bold) <Title>`
    font-size: medium;
    margin: 0;
    padding: 0;
    -webkit-line-clamp: ${props => props.visibleLines};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  `

export const Property = styled.span`
    font-size: small;
  `

interface Detail {
  visibleLines?: number
}

export const Detail = styled.p<Detail>`
    font-size: medium;
    margin: 15px 0 0 0;
    padding: 0;
    -webkit-line-clamp: ${props => props.visibleLines};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  `

export const PropertyRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 3px;
    margin-bottom: 3px;
  `

export const NameTag = styled(Tag)`
    margin-left: 3px;
    margin-right: 3px;
  `