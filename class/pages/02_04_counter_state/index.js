import { useState } from 'react' 

export default function CounterStatePage() {

    const [ qqq, setQqq] = useState(0)

    function zzz() {
        // 화면과 데이터를 같이 연결해 주고 있다.ㅣ
        setQqq(qqq + 1)
    }

    return(
        <>
            <div>{qqq}</div>
            <button onClick={zzz}>카운트증가.!!!</button>
        </>
    )
}