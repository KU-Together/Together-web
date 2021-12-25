import React,{useState} from "react";
import { Input_style } from './styles';


type InfoProps={
  type:string
  value:any
  name:string
  id:string
  onChange:any
  placeholder?:string
  className?:string
}

const Inputinfo= (props:InfoProps) => {

  const onChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
    const newValue = e.target.value;
 }

    return (
      
            <Input_style
              type={props.type}
              name={props.name}
              value={props.value}
              id={props.id}
              onChange={onChange}
              placeholder={props.placeholder}
              className={props.className}
            />
    );
  };
  
  export default Inputinfo;