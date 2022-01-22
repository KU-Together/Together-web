import styled from 'styled-components'
import Checkbox from './Checkbox';


export const Button_style=styled.button`
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;

border-radius:5px;
background-color:#3498db;
border: none;
color: white;
padding: 10px 32px;
text-align: center;
text-decoration: none;
display: inline-block;

font-size: 20px;
margin-left:50%;
cursor: pointer;

&:hover{
    background-color:#2980b9;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}


&:active,
&:focus{
    outline:none;
}
`;
export const Input_style=styled.input`
width: 100%;
border: 1px solid;
outline: none;
border-radius: 0px;
line-height: 2.5rem;
font-size: 1.2rem;
padding-left: 0.5rem;
padding-right: 0.5rem;
`;

export const Container=styled.div`
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;

float:left;
margin:10px;
width: 39.7%;
border-radius:5px;
background-color:#3498db;
border: none;
color: white;
padding: 10px 32px;
text-align: center;
text-decoration: none;
display: inline-block;

font-size: 20px;
cursor: pointer;


`;

export const Radio=styled.input`
-webkit-appearance: none;
-moz-appearance: none;
background-color: yellow;
  border: 1px solid red;
  color: green;
  margin:24%;
  padding:40%;
`;