import { useState } from 'react'
import { useRouter } from 'next/router'

import { useMutation, gql } from '@apollo/client'
import BoardWriteUI from './BoardWrite.presenter'
const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput:CreateBoardInput!){
        createBoard(createBoardInput:$createBoardInput) {
            _id
            writer
            title
            contents
            createdAt
        }}
    `

export default function BoardWritePage(){

    const router = useRouter()
    const [createBoard] = useMutation(CREATE_BOARD)
    const [writer, setWriter] = useState("")
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")
    const [hhh, setHhh] = useState(false) 


    function onChangeWriter(event){
      setWriter(event.target.value)
         if(event.target.value !== "" && password !== "" && title !== "" && contents !==""){
        setHhh(true) 
        } else { setHhh(false)}
    }
    
    
    function onChangePassword(event){
        setPassword(event.target.value)
           if(writer !== "" && event.target.value !== "" && title !== "" && contents !==""){
          setHhh(true) 
          } else { setHhh(false)}
      }

      function onChangeTitle(event){
        setTitle(event.target.value)
           if(writer !== "" && password !== "" && event.target.value !== "" && contents !==""){
          setHhh(true) 
          } else { setHhh(false)}
      }

      function onChangeContents(event){
        setContents(event.target.value)
           if(writer !== "" && password !== "" && title !== "" && event !==""){
          setHhh(true) 
          } else { setHhh(false)}
      }
  

    async function abc() {
        try {
        const result = await createBoard(
            { variables:{
                createBoardInput: {
                    writer: writer,
                    title: title,
                    contents: contents,
                    password: password
                    
                }
         }}
        )
        
       router.push(`/boards/new2/${result.data.createBoard._id}`) }
       catch(error){
       console.log(error.message)
      }
    }

    return(
        <>
        <BoardWriteUI 
            ocw={onChangeWriter}
            ocp={onChangePassword}
            oct={onChangeTitle}
            occ={onChangeContents}
            ocsb={abc}
            hhh={hhh}
            
            />
        </>
    );

}