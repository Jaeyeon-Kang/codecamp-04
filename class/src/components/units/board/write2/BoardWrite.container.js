import BoardWriteUI from "./BoardWrite.presenter"
import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries"
import { useRouter } from "next/router"


export default function BoardWrite(props){
    const router = useRouter()
    const [myQqq, setMyQqq] = useState(false)

    const [myWriter, setMyWriter] = useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myContents, setMyContents] = useState("")

    const [updateBoard] = useMutation(UPDATE_BOARD)
    const [createBoard] = useMutation(CREATE_BOARD)

    function onChangeMyWriter(event){
        setMyWriter(event.target.value)
        if(event.target.value !== "" && myTitle !== "" && myContents !== "" ){
            setMyQqq(true)
        } else {
            setMyQqq(false)
        }
    }

    function onChangeMyTitle(event){
        setMyTitle(event.target.value)
        if(myWriter !== "" && event.target.value !== "" && myContents !== "" ){
            setMyQqq(true)
        } else {
            setMyQqq(false)
        }
    }

    function onChangeMyContents(event){
        setMyContents(event.target.value)
        if(myWriter !== "" && myTitle !== "" && event.target.value !== "" ){
            setMyQqq(true)
        } else {
            setMyQqq(false)
        }
    }

    async function zzz(){
        alert("등록하기!!!")
        const result = await createBoard({
            variables: { writer: myWriter, title: myTitle, contents: myContents}
        }) 
        console.log(result)
        console.log(result.data.createBoard.message)
        alert(result.data.createBoard.number)
        router.push(`/08-06-boards/${result.data.createBoard.number}`)
    }

    async function xxx(){
        alert("수정하기!!!")
        const result = await updateBoard({
            variables: { number: Number(router.query.myNumber), writer: myWriter, title: myTitle, contents: myContents}
        })
        console.log(result.data.updateBoard.message)
        router.push(`/08-06-boards/${router.query.myNumber}`)
    }

    return(
        <>
        <BoardWriteUI 
            aaa={onChangeMyWriter} 
            bbb={onChangeMyTitle} 
            ccc={onChangeMyContents}
            zzz={zzz}
            qqq={myQqq}
            isEdit={props.isEdit}
            xxx={xxx} 
            />
        </>
    )
}