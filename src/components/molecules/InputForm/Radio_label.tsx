import React,{useState} from "react";
import Radio from "components/atoms/InputForm/Radio";
import {Item,RadioButton,RadioButtonLabel} from "components/molecules/InputForm/styles";
const Radio_label=() => {
    

    return (
        <div>
            <Item>
            <RadioButton value="yes" id="major_yes"/>
            <RadioButtonLabel/>전공
            </Item>
            
            <Item>
            <RadioButton value="no" id="major_no"/>
            <RadioButtonLabel/>비전공
            </Item>
            
            </div>
    )
  };
  
  export default Radio_label;