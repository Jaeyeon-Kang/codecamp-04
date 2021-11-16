import { useState } from "react"

export default function SignupStatePage(){

    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    

    function aaa(event){
        // event.target // <input type="text" onChange={aaa} /> 이 태그 전체
        
        setEmail(event.target.value)
    }

    function ppp(event){
        setPassword(event.target.value)
    }

    function ccc(){
        console.log("email:", email)
        console.log("password:", password)

        if(email.includes("@") === false){
            setEmailError("이메일에 @가 없습니다. 잘못된 이메일이네요!")
        }
    }

    return(
        <>
            <div>
                이메일 입력: <input type="text" onChange={aaa} /><br />
                <div>{emailError}</div>
                비밀번호 입력: <input type="password" onChange={ppp} /><br />
                
                <button onClick={ccc}>회원가입</button>
            </div>
        </>

    )
}