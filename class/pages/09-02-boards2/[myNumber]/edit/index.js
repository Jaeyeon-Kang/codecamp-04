// 08-05가 글 쓰기 페이지, 08-06이 수정하기 페이지인데 수정하려면 id가 필요하니까 08-06에 [MyNumber]이랑 edit 붙인거임.
import BoardWrite from '../../../../src/components/units/board/write3/BoardWrite.container'
import {gql, useQuery} from '@apollo/client'
import {useRouter} from "next/router"
const FETCH_BOARD = gql`
    query fetchBoards($number: Int){
        fetchBoard(number: $number){
            writer
            title
            contents

        }
    }
`

export default function BoardsEditPage(){
    const router = useRouter()
    const {data} = useQuery(FETCH_BOARD, {
        variables: {number: Number(router.query.myNumber)
        }})
    return(
         <BoardWrite isEdit={true} data={data}/>

    )


}