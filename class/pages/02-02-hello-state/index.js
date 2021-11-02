import {useState} from 'react' 


export default function HelloStatePage(){
    
    const [qqq, setQqq] = useState("안녕하세요")
    //qqq는 변수, setQqq는 기능을 바꿔주는 함수임. useState는 리액트에서 제공해준 거라 가져와야 함(import).
    //안녕하세요 라는 값이 왼쪽 qqq에 저장이 되어 아래 {qqq}함수로 가서 적용됨
    
    function zzz(){
        setQqq("반갑습니다")
    }

    return (
        <>
        <div>{qqq}</div>
       
        <button onClick={zzz}>버튼클릭!!!</button>
        </>
    )
 /* 자바스크립트임을 알려주기 위해 qqq에 중괄호 넣기 */
}

