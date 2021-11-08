import BoardReadUI from "./BoardRead.presenter"
import { useRouter } from 'next/router'
import { useQuery, gql } from '@apollo/client'



const FETCH_BOARD = gql`
    query fetchBoard ($boardId : ID!){
      fetchBoard(boardId : $boardId)
      {
        _id
        writer
        title
        contents 
        createdAt
    }
  }
`



export default function BoardReadPage(){
        
        const router = useRouter()
        const { data } = useQuery(FETCH_BOARD, {
            variables: { boardId: router.query.myId }
            })
        
            console.log(data)


    
    return( 
        <BoardReadUI/>
    )
}