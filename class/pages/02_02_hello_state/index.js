import { useState } from 'react' 

export default function HelloStatePage() {

    const [ qqq, setQqq] = useState("안녕하세요")

    // onClick 했을 때의 발생할 함수
    function zzz() {
        // 화면과 데이터를 같이 연결해 주고 있다.ㅣ
        setQqq("반갑습니다.")
    }

    return(
        <>
            <div>{qqq}</div>
            <button onClick={zzz}>버튼 클릭!!!</button>
        </>
    )
}