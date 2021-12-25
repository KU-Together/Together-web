import React from 'react'
import styled from 'styled-components'

type TextProps={
  title:string
  children?:string
}




export const Container=styled.div`
margin:  50px auto;
background-color:white;
`;
export const Positioner=styled.div`
position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Wrapper=styled.div`
  height: auto;
  width: 100%;
  box-sizing: border-box;
`;

 const Title=styled.div`
 font-size: 2.6rem;
 font-weight: bold;
 margin-bottom: 1rem;
 font:bold;
`;

export const Span=styled.span`
font-size:18px;
`;

export const AuthContent = (props:TextProps) => (
  <div>
      <Title>{props.title}</Title>
      {props.children}
  </div>
);

export const AuthSpan=(props:TextProps)=>(
  <div>
    <Span>{props.title}</Span>
    {props.children}
  </div>
);