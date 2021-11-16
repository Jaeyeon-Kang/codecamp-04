import axios from 'axios'
import { useState } from 'react'

export default function RestGetPage(){ 
    const[aaa, SetAaa] = useState("정당어쩌구")

    async function zzz(){
        const result = await axios.get("https://koreanjson.com/posts/1")
        console.log(result)
        console.log(result.data.title)
        SetAaa(result.data.title)
    }

    return (
        <>
            <div>{aaa}</div>
            <button onClick={zzz}>REST-API 요청하기!</button>
        </>
    )
}