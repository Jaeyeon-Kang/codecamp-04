import BoardWritePage from "../../../../../src/components/units/board/createboard/BoardWrite.container";
import {gql} from '@apollo/client'
import {useRouter} from "next/router"
import { useQuery } from '@apollo/client'

  const FETCH_BOARD = gql`
    query fetchBoard($boardId:ID!){
      fetchBoard(boardId: $boardId){
        writer
        title
        contents
      }
    }
  `

  export default function ReCreateBoardPage() {
    const router = useRouter()
   
    const { data } = useQuery(FETCH_BOARD, {
      variables: { boardId: String(router.query.myId) }
    })
    
    return (
      <BoardWritePage isEdit={true} data = {data} />
    )
  }