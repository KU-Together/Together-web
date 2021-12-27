import React,{useState} from "react";
import { Input_style } from './styles';


type InfoProps={
  type:string
  value:any
  name:string
  id:string
  onChange:any
  //onChange ->?
  placeholder?:string
  className?:string
}

const Inputinfo= (props:InfoProps) => {

  const onChange = (e: React.ChangeEvent<HTMLInputElement>)=> { //이거 왜 여기있냐??????????????????? 확인
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