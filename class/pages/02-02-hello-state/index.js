import { useState } from "react"

export default function HelloStatePage(){

    const [qqq, setQqq] = useState("안녕하세요")

    function zzz(){
        setQqq("반갑습니다")
    }

    return (
        <>
            <div>{qqq}</div>
            <button onClick={zzz}>버튼클릭!!!</button>
        </>
    )

}