import { useMutation,gql } from '@apollo/client'
import { useState } from 'react'

// api하고
// 아래의 미미가 위 $writer로, 위$writer가 아래 $writer로
const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){


        createBoard(writer: $writer, title: $title, contents: $contents){
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationBoard3Page(){
    const [myWriter, setMyWriter] = useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myContents, setMyContents] = useState("")

    const [createBoard] = useMutation(CREATE_BOARD) // 만들고

    function onChangeMyWriter(event){
        setMyWriter(event.target.value)
    }

    function onChangeMyTitle(event){
        setMyTitle(event.target.value)
    }

    function onChangeMyContents(event){
        setMyContents(event.target.value)
    }



    async function zzz(){
        const result = await createBoard({
            variables: { writer: myWriter, title: myTitle, contents: myContents}
        }) // 실행하고
        console.log(result)
        console.log(result.data.createBoard.message)
    }

    return(
        <>
            작성자: <input type="text" onChange={onChangeMyWriter} /><br />
            제목: <input type="text" onChange={onChangeMyTitle} /><br />
            내용: <input type="text" onChange={onChangeMyContents} /><br />
            <button onClick={zzz}>게시물 등록하기</button>
        </>
    )

}