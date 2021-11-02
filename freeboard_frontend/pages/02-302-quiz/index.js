import {useState} from 'react' 


export default function QuizPage(){
    
    const [qqq, setQqq] = useState("000000")
   
    function zzz(){
        setQqq(
            String(Math.floor(Math.random()*1000000)).padStart(6,"0")
        )
    }

    return (
        <>
        <div>{qqq}</div>
        <button onClick={zzz}>인증번호전송</button>
        </>
    )
 
}