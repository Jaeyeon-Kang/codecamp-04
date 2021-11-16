import { useMutation,gql } from '@apollo/client'
import { useState } from 'react'

// api하고
const CREATE_BOARD = gql`
    mutation{
        createBoard(writer: "선우" title: "타이트리" contents: "콘텐츠우"){
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationBoard1Page(){
    const [aaa, setAaa] = useState("안녕하세요")

    const [createBoard] = useMutation(CREATE_BOARD) // 만들고

    async function zzz(){
        const result = await createBoard() // 실행하고
        console.log(result)
        console.log(result.data.createBoard.message)
        setAaa(result.data.createBoard.message)
    }

    return(
        <>
            <div>{aaa}</div> 
            <button onClick={zzz}>GraphQL-API 요청하기!!</button>
        </>
    )

}