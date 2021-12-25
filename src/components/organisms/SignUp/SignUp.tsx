import { Button } from 'components/atoms/InputForm/Button'
import MyForm from 'components/atoms/MyForm';
import Hello from 'components/atoms/Test';
import Inputformat from 'components/molecules/InputForm/Inputformat';
import Radio_label from 'components/molecules/InputForm/Radio_label';
import React, { Fragment,useState } from 'react'
import {AuthContent, AuthSpan, Container,Positioner,Wrapper} from './styles'

import styled from "styled-components";
import Checkbox_front from 'components/molecules/InputForm/Checkbox_front';
import Checkbox_back from 'components/molecules/InputForm/Checkbox_back';
import { Span } from 'components/molecules/InputForm/styles';
 
function SignUp() {

  const [Email,setEmail]=useState("")
  const [Password, setPassword] = useState("")
  const [Name, setName] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("")
  


 


    const onSubmit = (form: { name: string}) => {
        console.log(form);
    };
    //등록된 아이디가 있으면 회원가입 불가
    //중복된 아이디가 없기 때문에 비밀번호 확인 X

    
  return (

/* <Hello/> */
/* <MyForm onSubmit={onSubmit} /> */
<Positioner>
<Container>
  <Wrapper>
  <AuthContent title="회원가입"/>
      <Inputformat/>
      {/*CHECK BOX 구현*/}
      <AuthSpan title="관심있는 분야를 선택하세요."/>
      <p>프론트엔드</p>
      <div>
      <Checkbox_front/>
      </div>
      <div>===========================================================================</div>
      <p>백엔드</p>
      <div>
      <Checkbox_back/>
      </div>
      <div>
        
      </div>
      <AuthSpan title="전공인가요? 비전공인가요?"/>
      <label htmlFor="introduce-label">
                <div>
                  {/* react radio button 구현 */}
                <Radio_label/>
                </div>
      </label>
      {/* 관심사{favor.map(value => <Checkbox value={value} />)} */}
      
      </Wrapper>
      </Container>
      <Button />
      </Positioner>
      
      
  );
}
export default SignUp