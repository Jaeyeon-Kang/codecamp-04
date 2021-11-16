import { useMutation,gql } from '@apollo/client'
import { useState } from 'react'

// api하고
// 아래의 미미가 위 $writer로, 위$writer가 아래 $writer로
const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){ { 


        createBoard(writer: $writer, title: $title, contents: $contents){
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationBoard2Page(){
    const [aaa, setAaa] = useState("안녕하세요")

    const [createBoard] = useMutation(CREATE_BOARD) // 만들고

    async function zzz(){
        const result = await createBoard({
            variables: { writer: "미미", title: "이트리타", contents: "텐츠우콘"}
        }) // 실행하고
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