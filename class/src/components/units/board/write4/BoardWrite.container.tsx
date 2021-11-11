import BoardWriteUI from "./BoardWrite.presenter"
import { useMutation } from '@apollo/client'
import {  ChangeEvent, useState } from 'react'
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries"
import { useRouter } from 'next/router'




interface IProps {
    isEdit: boolean
    data?: any
}


export default function BoardWrite(props: IProps){
    const [myQqq, setMyQqq] = useState <boolean> (false)
    const [myWriter, setMyWriter] = useState("")
    const [myTitle, setMyTitle] = useState("")
    const [myContents, setMyContents] = useState("")
    const [createBoard] = useMutation(CREATE_BOARD)
    //위에가 생성, 아래가 수정하기
    const [updateBoard] = useMutation(UPDATE_BOARD)
    const router = useRouter()
   
    function onChangeMyWriter(event: ChangeEvent<HTMLInputElement>){
        setMyWriter(event.target.value)
        // if(myWriter !== "" && myTitle !== "" && myContents !== ""){
        //     setMyQqq(true)
         if(event.target.value !== "" && myTitle !== "" && myContents !== ""){
            setMyQqq(true) 
        } else { setMyQqq(false)}
    }
    function onChangeMyTitle(event: ChangeEvent<HTMLInputElement>){
        setMyTitle(event.target.value)
        // if(myWriter !== "" && myTitle !== "" && myContents !== ""){
        //     setMyQqq(true)
         if(myWriter !== "" && event.target.value !== "" && myContents !== ""){
            setMyQqq(true)
        } else { setMyQqq(false)}
    }
    function onChangeMyContents(event: ChangeEvent<HTMLInputElement>){
        setMyContents(event.target.value)
        // if(myWriter !== "" && myTitle !== "" && myContents !== ""){
        //     setMyQqq(true)
        if(myWriter !== "" && myTitle !== "" && event.target.value !== ""){
        setMyQqq(true)
        } else { setMyQqq(false)}   
    }
   
    async function zzz(){
        // alert("등록하기 눌렀음")
        const result = await createBoard({
            variables: { writer: myWriter, title: myTitle, contents: myContents}
        })
        console.log(result)
        console.log(result.data.createBoard.message)
        router.push(`/09-02-boards2/${result.data.createBoard.number}`)
    }


    // 위에까지가 만들기, 아래는 수정하기
    async function xxx(){

        interface IMyVariables {
            number: number,
            writer?: string,
            title?: string,
            contents?: string
        }
 


        // alert("수정하기 눌렀음")
        const myVariables: IMyVariables = {
            number: Number(router.query.myNumber)
        }

        if(myWriter !== "")
            myVariables.writer = myWriter
        

        if(myTitle !== "")
            myVariables.title = myTitle
        

        if(myContents !== "")
            myVariables.contents = myContents
        



        const result = await updateBoard({
            variables: myVariables

            
        })
        console.log(result)
        router.push(`/09-02-boards2/${router.query.myNumber}`)
    }




    
    return(
        <>
        <BoardWriteUI
            aaa={onChangeMyWriter}
            bbb={onChangeMyTitle}
            ccc={onChangeMyContents}
            zzz={zzz} 
            qqq={myQqq}
            ggg={props.isEdit}
            xxx={xxx}
            data={props.data}
            />
        </>
    )
}