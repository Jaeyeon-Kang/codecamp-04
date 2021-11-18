import { useState } from "react"

export default function CertiStatePage() {

    const [ token, setToken ] = useState("000000")

    function getToken() {
        setToken(token = String(Math.floor(Math.random()*1000000)).padStart(6,"0"))
    }

    return( 
        <>
            <div>{token}</div>
            <button onClick={getToken}>인증번호전송</button>
        </>
    )
}