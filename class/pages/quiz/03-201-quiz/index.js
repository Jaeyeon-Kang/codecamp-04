import {useMutation, gql } from '@apollo/client'
import { useState } from 'react'

const CREATE_BOARD = gql`
    mutation{
        createBoard(writer: "재연", title:"제목임", contents: "내용임"){
        _id
        number
        message
    }}
`

export default function QUIZPage(){


    const [ createBoard ] = useMutation(CREATE_BOARD)

    async function zzz(){
        const result = await createBoard()   
        console.log(result)
        console.log(result.data.createBoard.message)
      
    }




    return(
        <>
        
        <button onClick={zzz}>GRAPHQL-API 요청하기</button>
        </>
    )

}