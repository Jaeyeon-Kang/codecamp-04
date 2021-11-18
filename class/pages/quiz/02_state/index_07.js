// state를 활용한 회원가입 폼 만들기
// 회원가입 화면을 다음의 조건에 맞게 만들어 주세요
// (이메일과 비밀번호 입력창, 비밀번호확인 입력창, 가입하기 버튼, 총 4개를 각각 만들어 주세요)
// 각각의 입력값을 state 변수(state 이름은 스스로 결정해 주세요) 에 저장해 주세요

import { useState } from "react"
import { Error } from '../../../styles/emotion'

export default function SignupStatePage() {

    const [ email, setEmail ] = useState("")
    const [ emailError, setEmailError ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ passwordError, setPasswordError ] = useState("")
    const [ confirm, setConfirm ] = useState("")
    const [ confirmError, setConfirmError ] = useState("")

    function InputEmail(event) {
        event.target.value
        setEmail(event.target.value)
    }

    function InputPassword(event) {
        event.target.value
        setPassword(event.target.value)
    }

    function InputConfirm(event) {
        event.target.value
        setConfirm(event.target.value)
    }

    function ErrorMessage() {
        if(email.includes("@") === false) {
            setEmailError("이메일에 @가 없습니다. 잘못된 이메일입니다.")
        }

        if(password !== confirm) {
            setPasswordError("비밀번호가 다릅니다.")
            setConfirmError("비밀번호가 다릅니다")
        }
    }

    return(
        <div>
            이메일입력 : <input type="text" onChange={InputEmail}/>
            <Error>{emailError}</Error>
            비밀번호입력 : <input type="password" onChange={InputPassword}/>
            <Error>{passwordError}</Error>
            비밀번호확인 : <input type="password" onChange={InputConfirm}/>
            <Error>{confirmError}</Error>
            <button onClick={ErrorMessage}>가입하기</button>
        </div>

    )
}