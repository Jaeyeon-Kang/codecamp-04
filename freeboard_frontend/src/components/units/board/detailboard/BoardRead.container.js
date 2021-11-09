import BoardReadUI from "./BoardRead.presenter"
import { useRouter } from 'next/router'
import { useMutation, useQuery, gql } from '@apollo/client'



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


const DELETE_BOARD = gql`
    mutation deleteBoard($boardId: ID!){
        deleteBoard(boardId: $boardId)
    }
`



export default function BoardReadPage(){
        
        const router = useRouter()
        const [deleteBoard ] = useMutation(DELETE_BOARD)
        const { data } = useQuery(FETCH_BOARD, {
            variables: { boardId: router.query.myId }
            })
        
            console.log(data)

        async function onClickDeleteBox(){
          try{await deleteBoard({
            variables: {boardId: data?.fetchBoard._id},
            refetchQueries: [{query: FETCH_BOARD}]
          })  }catch(error){
              alert("에러ㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜ흑흑흐구ㅜㅜㅜㅜㅜㅜㅎ그흑")}
          }
          



        let bbb=String(data?.fetchBoard.createdAt)
        console.log(bbb)
        bbb=bbb.split("")
        console.log(bbb)
        bbb=bbb.slice(0,10)
        console.log(bbb)
        bbb=bbb.join("")
        console.log(bbb)    


        function onClickListBox(){
          router.push("/portfolioboard/listboard")
        }
        // "/05-06-dynamic-board-read/$[id]"
    
    return( 
        <BoardReadUI
        aaa={data?.fetchBoard.writer}
        bbb={bbb}
        ccc={data?.fetchBoard.title}
        ddd= {data?.fetchBoard.contents}
        deletebox={onClickDeleteBox}
        listbox={onClickListBox}

        />
    )
}


