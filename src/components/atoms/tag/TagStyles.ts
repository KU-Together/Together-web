import styled from "styled-components"

type ContainerProps = {
  color?: string
}

export const Container = styled.div<ContainerProps>`
    display: inline-block;
    background-color: ${props => props.color || 'pink'};
    padding: 3px 5px 3px 5px;
    border-radius: 3px;
    font-size: small;
  `