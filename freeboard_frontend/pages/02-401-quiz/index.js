import {useState} from 'react'

export default function SignupStatePage(){

    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")

    function aaa(event){
         setEmail(event.target.value)
    }
    function bbb(event){
        setPassword(event.target.value)
    }

    function ccc(event){
        setPassword(event.target.value)
    }

    function ddd(){
      
        if(email.includes("@") === false){
           setEmailError("이메일에 @가 없으면 에러입니다")
        } 
        else if (email.includes("@") === true){
            setEmailError("")}

        if( bbb!== ccc ){setPasswordError("패스워드에러입니다")}
    }
    

       
    
    
    return(
        <div>
            이메일 <input type="text" onChange={aaa}/><br/>
                <div>{emailError}</div>
            패스워드 <input type="password" onChange={bbb} /><br/>
            패스워드확인 <input  type="password" onChange={ccc} /><br/>
                <div>{passwordError}</div>
            <button onClick={ddd}>가입하기</button>
        </div>
    )

}

