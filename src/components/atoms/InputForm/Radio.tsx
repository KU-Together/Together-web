import React,{useState} from "react"

type RadioProps={
  value:string
  id:string
}
const Radio= (props:RadioProps) => {
    const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    };

    return (
            <input  
              type="radio"
              name="major"
              value={props.value}
              id={props.id}
              onChange={radioHandler}
            />
    );
  };
  
  export default Radio;