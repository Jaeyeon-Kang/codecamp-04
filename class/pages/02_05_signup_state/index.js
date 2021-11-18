import { useState } from 'react'

export default function SignupStatePage() {

    const [ email, setEmail ] = useState("")
    const [ emailError, setEmailError] = useState("")
    const [ password, setPassword ] = useState("")

    function aaa(event) {
        // event.target    // <input type="text" onChange={aaa}/> 태그 전체를 가져옴
        event.target.value

        setEmail(event.target.value)
    }

    function bbb(event) {
        setPassword(event.target.value)
    }

    function ccc() {
        console.log('email: ', email)
        console.log('password: ', password)

        if(email.includes("@") === false) {
            // alert("이메일에 @가 없습니다. 잘못된 이메일이네요!")
            setEmailError("이메일에 @가 없습니다. 잘못된 이메일이네요!")
        }
    }

    return( 

        <div>
            {/* 입력할 때 변경하는 속성 onChange */}
            이메일입력 : <input type="text" onChange={aaa}/> <br />
            <div>{emailError}</div>
            비밀번호입력 : <input type="password" onChange={bbb}/><br />
            <button onClick={ccc}>회원가입</button>
        </div>


    )

}