import { gql, useMutation, useQuery } from '@apollo/client'
import ListBoardUI from './listBoard.presenter'

const FETCH_BOARDS = gql`
    query fetchBoards ($page: Int){
        fetchBoards (page: $page)
            {
            _id
            writer
            title
            createdAt
        }
    }
`

const FETCH_BOARDS_Of_The_BEST= gql`
    query {
        fetchBoardsOfTheBest{
            _id
            writer
            title
            createdAt
        }
    }
`

const DELETE_BOARD = gql`
    mutation deleteBoard($boardId: ID!){
        deleteBoard(boardId: $boardId)
    }
`


export default function ListBoardPage(){
    const [deleteBoard] = useMutation(DELETE_BOARD)
    const { data } = useQuery(FETCH_BOARDS) 
    const { data : bestdata } = useQuery(FETCH_BOARDS_Of_The_BEST)

async function onClickDelete(event){
     try{ await deleteBoard({
            variables: {boardId: event.target.id},
            refetchQueries: [{query: FETCH_BOARDS}]    
        })
    } catch(error){
        alert("에러지롱")}
    }

    return (
      
        <ListBoardUI 
        onClickDelete = {onClickDelete}
        data = {data}
        bestdata = {bestdata}
        />

    )

}