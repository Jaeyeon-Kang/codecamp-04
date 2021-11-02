import {useState} from 'react'

export default function SignupStatePage(){

    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    
    function aaa(event){
         setEmail(event.target.value)
    }
    function bbb(event){
        setEmail(event.target.value)
    }
    //onChange(써지고 나서 반응하는거. 하나 입력할 때마다 바뀜. 010 쓰면 3번 바뀜) 쓰면 자동으로 (event)가 생기고 event.target 하면 바로 태그 전체(<input type="text" onChange={aaa}/>)를 가져오게 됨. 
    //value는 그때 입력된 '값'을 가져오라는 뜻임
    function ccc(){
        console.log('email:', email)
        console.log('password:', password)

        if(email.includes("@") === false){
            //alert("이메일에 @가 없습니다. 잘못된 이메일이네여")
            //빨간색 경고문 만들어야되서 const 위에 다시 만듦.
            setEmailError("이메일에 @가 없습니다. 잘못된 이메일이네요!")
        }
    }
    //콘솔에 email: 어쩌구, password: 어쩌구 이렇게 나옴. '' 치는건 문자로 만들어야되서 그런듯.
    return(
        <div>
            이메일입력: <input type="text" onChange={aaa}/><br/>
            <div>{emailError}</div>
            비밀번호입력: <input type="password" onChange={bbb} /><br/>
            <button onClick={ccc}>회원가입</button>
        </div>
    )

}