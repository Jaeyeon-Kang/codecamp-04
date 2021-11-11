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

const UPDATE_BOARD = gql`
    mutation updateBoard($updateBoardInput: UpdateBoardInput!, $password: String, $boardId:ID!){
        updateBoard(updateBoardInput: $updateBoardInput, password:$password, boardId:$boardId){
            _id
            title
            contents
        }
    }
`


export default function BoardWritePage(props){

    const router = useRouter()
    const [createBoard] = useMutation(CREATE_BOARD)
    const [writer, setWriter] = useState("")
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")
    const [changeButton, setChangeButton] = useState(false) 
    const [updateBoard] = useMutation(UPDATE_BOARD)
    


    function onChangeWriter(event){
      setWriter(event.target.value)
         if(event.target.value !== "" && password !== "" && title !== "" && contents !==""){
        setChangeButton(true) 
        } else { setChangeButton(false)}
    }
    
    
    function onChangePassword(event){
        setPassword(event.target.value)
           if(writer !== "" && event.target.value !== "" && title !== "" && contents !==""){
          setChangeButton(true) 
          } else { setChangeButton(false)}
      }

      function onChangeTitle(event){
        setTitle(event.target.value)
           if(writer !== "" && password !== "" && event.target.value !== "" && contents !==""){
          setChangeButton(true) 
          } else { setChangeButton(false)}
      }

      function onChangeContents(event){
        setContents(event.target.value)
           if(writer !== "" && password !== "" && title !== "" && event !==""){
          setChangeButton(true) 
          } else { setChangeButton(false)}
      }
  

    async function createBoard1() {
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
        
       router.push(`/portfolioboard/detailboard/${result.data.createBoard._id}`) }
       catch(error){
       console.log(error.message)
      }
    }

    const myVariables = {
        updateBoardInput: {},
        password,
        boardId: router.query.myId
        }

        if(title === "") myVariables.updateBoardInput.title = title
        if(contents === "") myVariables.updateBoardInput.contents = contents

    async function updateBoard2() {
        try {
            const result = await updateBoard(
                { variables: myVariables})
                console.log(result)
            router.push(`/portfolioboard/detailboard/${router.query.myId}`) 
        } //router.query._id //result.data.updateBoard._id
        
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
            ocsb={createBoard1}
            changeButton={changeButton}
            isedit={props.isEdit}
            ocub={updateBoard2}
            data={props.data}
            
            />
        </>
    );

}