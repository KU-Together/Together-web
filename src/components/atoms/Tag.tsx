import React from 'react'
import styled from 'styled-components'

interface Props {
  tagName?: string,
  color?: string,
  className?: string,
}

function Tag(props: Props) {
  const Tag = styled.div`
    display: inline-block;
    background-color: ${props.color || 'pink'};
    padding: 3px 5px 3px 5px;
    border-radius: 3px;
    font-size: small;
  `

  return (
    <Tag className={props.className}>
      {props.tagName || '태그'}
    </Tag>
  )
}

export default Tag
