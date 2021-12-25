import React,{useCallback, useState} from "react";
import Inputinfo from "components/atoms/InputForm/Input";
import useInput from 'components/atoms/InputForm/UseInput';
import {Span,Label} from 'components/molecules/InputForm/styles';

const Inputformat=()=> {
    
    
    const [password,setPassword]=useInput();
    const [passwordCheck, setPasswordCheck] = useState('');

    const [mismatchError, setMismatchError] = useState(false);
    const [signUpError, setSignUpError] = useState('');
    const [signUpSuccess, setSignUpSuccess] = useState(false);


    const [email, setEmail] = useInput();
    const [nickname, setNickname] = useInput();
    const [name, setName] = useInput();
    const [local, setLocal] = useInput();
    const [introduce, setIntroduce] = useInput();
    
    const [passwordError, setPasswordError] = useState(false);
    

    const onSubmit = useCallback((e) => {
        e.preventDefault();
         //비밀번호와 비밀번호 체크가 다를 경우를 검증한다

        // if(password !== passwordCheck){                 <======================= 로그인 확인중.................................
        //     return setPasswordError(true);
        // }

    },[password,passwordCheck]);
    
    const onChangePasswordChk = useCallback((e) => {
        //비밀번호를 입력할때마다 password 를 검증하는 함수
        
        setMismatchError(e.target.value !== password);
        setPasswordCheck(e.target.value);
        //setPasswordCheck(e.target.value);
        //password state를 사용하기때문에 password를 넣어준다
    },[passwordCheck]);
    
    

    return (
        <div>
            <form onSubmit={onSubmit}>
            <label htmlFor="email-label">
                <Span>이메일[ID]</Span>
                <Label>
                <Inputinfo type="email" id="email" name="email" value={email} onChange={setEmail} placeholder="example@google.com"/>
                </Label>
            </label>

            <label htmlFor="password-label">
                <span>비밀번호</span>
                <Label>
                <Inputinfo type="password" id="password" name="password" value={password} onChange={setPassword} placeholder="비밀번호"/>
                </Label>
            </label>

            <label htmlFor="password-check-label">
                <span>비밀번호 확인</span>
                <Label>
                <Inputinfo type="password" id="password-check" name="password-check" value={passwordCheck} onChange={onChangePasswordChk} placeholder="비밀번호 확인"/>
                {passwordError && <div style={{color : 'red'}}>비밀번호가 일치하지 않습니다.</div>}
                </Label>
            </label>

            <label htmlFor="nickname-label">
                <span>닉네임</span>
                <Label>
                <Inputinfo type="text" id="nickname" name="nickname" value={nickname} onChange={setNickname} placeholder="닉네임"/>
                </Label>
            </label>
            
            <label htmlFor="name-label">
                <span>이름</span>
                <Label>
                <Inputinfo type="text" id="name" name="name" value={name} onChange={setName} placeholder="이름"/>
                </Label>
            </label>
            
            <label htmlFor="local-label">
                <span>사는 지역</span>
                <Label>
                <Inputinfo type="text" id="local" name="local" value={local} onChange={setLocal} placeholder="사는 지역"/>
                </Label>
            </label>

            <label htmlFor="introduce-label">
                <span>짧은 자기소개</span>
                <Label>
                <Inputinfo type="text" id="introduce" name="introduce" value={introduce} onChange={setIntroduce} placeholder="짧은 자기소개"/>
                </Label>
            </label>
            </form>
        </div>
           
           
    );
  };
  
  export default Inputformat;