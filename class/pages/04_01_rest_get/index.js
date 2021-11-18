import axios from 'axios'
import { useState } from 'react'

export default function RestGetPage() {

    const [aaa, setAaa] = useState("안녕하세요")
    // let idx = 1

    // 만약 화살표 함수라면
    // const zzz = () => {
    //   await axios.get('')
    //}

    async function zzz() {
        const result = await axios.get('https://koreanjson.com/posts/'/*+idx*/)
        console.log(result)
        console.log(result.data.title)

        setAaa(result.data.title)
        // idx++
    }   



    return (
        <>
            <div>{aaa}</div>
            <button onClick={zzz}>REST-API 요청하기</button>
        </>
    )
}