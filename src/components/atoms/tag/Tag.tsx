import React from 'react'
import styled from 'styled-components'
import { Container } from './TagStyles'

interface Props {
  tagName?: string,
  color?: string,
  className?: string,
}

function Tag(props: Props) {
  return (
    <Container className={props.className} color={props.color}>
      {props.tagName || '태그'}
    </Container>
  )
}

export default Tag
