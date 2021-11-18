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

export default function GraphqlMutationBoard3Page() {
    const [mywriter, setMyWriter ] = useState("")
    const [mytitle, setMyTitle ] = useState("")
    const [mycontents, setMyContents ] = useState("")

    const [ createBoard ] = useMutation(CREATE_BOARD)

    function onChangeMyWriter(event) {
        setMyWriter(event.target.value)
    }
    function onChangeMyTitle(event) {

        setMyTitle(event.target.value)
    }
    function onChangeMyContents(event) {

        setMyContents(event.target.value)
    }

    async function zzz() {
        const result = await createBoard({
            variables : { writer: mywriter, title: mytitle, contents: mycontents} 
        })
        console.log(result)
        console.log(result.data.createBoard.message)

    }

    
    return (
        <>
          작성자 : <input type="text" onChange={onChangeMyWriter}/><br/>
          제목 : <input type="text" onChange={onChangeMyTitle}/><br/>
          내용 : <input type="text" onChange={onChangeMyContents}/><br/>
          <button onClick={zzz}>게시물 등록하기!!</button>
        </>
    )
}