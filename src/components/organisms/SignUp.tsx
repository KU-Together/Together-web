import { Button } from 'components/atoms/Button'
import Checkbox from 'components/atoms/Checkbox';
import MyForm from 'components/atoms/MyForm';
import Radio from 'components/atoms/Radio';
import React from 'react'
function SignUp() {
    const onSubmit = (form: { name: string}) => {
        console.log(form);
    };
    //등록된 아이디가 있으면 회원가입 불가
    //중복된 아이디가 없기 때문에 비밀번호 확인 X
  return (
        <div>
            <h1>회원가입</h1>
            이름<MyForm onSubmit={onSubmit} />
            닉네임<MyForm onSubmit={onSubmit} />
            비밀번호<MyForm onSubmit={onSubmit} />
            이메일(아이디)<MyForm onSubmit={onSubmit} />
            사는 지역<MyForm onSubmit={onSubmit} />
            전공 or 비전공<Radio/>
            관심사<Checkbox/>
            짧은 한마디<MyForm onSubmit={onSubmit} />
            <Button/>
        </div>
  )
}
export default SignUp