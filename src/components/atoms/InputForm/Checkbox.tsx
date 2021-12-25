import React from "react";
import { Container, Input_style } from './styles';

interface Props {
  isChecked: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  id:string;
}

const Checkbox = (props: Props) => {
  return (
      <Container>
        <label htmlFor={props.label}>{props.label}</label>
      <input
        type="checkbox"
        id={props.id}
        //label={props.label}
        checked={props.isChecked}
        onChange={props.handleChange}
        
      />
      </Container>
  );
};
export default Checkbox;
