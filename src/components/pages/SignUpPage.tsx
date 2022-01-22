
import SignUpTemplate from "components/templates/SignUpTemplate";
import React, { useState } from 'react';


function SignUpPage() {
  // Page 서버랑 통신하는 곳
  // 여기서 데이터를 서버에게 넘겨주거나, 서버에게 데이터를 받아오는
  
  // 회원가입할 때 이름, 닉네임, 비밀번호,이메일 등등 정보들을 서버한테 줄거.
  // 인풋으로 받는 정보를 state에 들고 있을 것
  
  //const [name, setName] = useState<string>('') // 이름 정보
  //const [nickname, setNickname] ...
  
  //const onClickSubmit = () => {
//    requestSignUp(name, nickname, ...)
//  }
  
  return (
    // Template을 부른다.
// SETNAME-TODOLIST-공부하자!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // 이름을 받는 인풋
    
      //<input
       // onChange={value => setName(value)}
      ///>
    
    <SignUpTemplate 
     // name={name}
      //setName={setName}
    />
  );
}

export default SignUpPage
