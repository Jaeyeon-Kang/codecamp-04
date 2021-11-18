import { useMutation, gql } from '@apollo/client'
import { useState } from 'react'

const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) {
        createBoard(writer: $writer, title: $title, contents: $contents) {
        _id
        number
        message
        }
      
    }
`

export default function GraphqlMutationBoard2Page() {
    const [mywriter, setWriter ] = useState("")
    const [mytitle, setTitle ] = useState("")
    const [mycontents, setContents ] = useState("")

    const [ createBoard ] = useMutation(CREATE_BOARD)

    function onChangeWriter(event) {
        setWriter(event.target.value)    
    }

    function onChangeTitle(event) {
        setTitle(event.target.value)
    }

    function onChangeContents(event) {
        setContents(event.target.value)
    }

    async function GraphqlGet2() {
        const result = await createBoard({
            
            variables: { writer: mywriter, title: mytitle, contents: mycontents }
        })
        console.log(result)

    }

    return (
        <>
            작성자 : <input type="text" onChange={onChangeWriter}/><br />
            제목 : <input type="text" onChange={onChangeTitle}/><br/>
            내용 : <input type="text" onChange={onChangeContents}/><br/>
            <button onClick={GraphqlGet2}>게시물 등록하기</button>
        </>
    )
}