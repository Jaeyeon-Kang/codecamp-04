import axios from "axios"



export default function RestGetPage() {


    async function restGet() {
        const result = await axios.get('http://koreanjson.com/users')
        console.log(result)
    }

    return (

        <button onClick={restGet}>Rest-API 요청하기</button>
    )
}