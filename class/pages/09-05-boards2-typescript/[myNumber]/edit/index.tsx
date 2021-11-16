import BoardWrite from "../../../../src/components/units/board/write3/BoardWrite.container";
import { gql, useQuery } from "@apollo/client"
import {useRouter} from "next/router";


const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number: $number){
            number
            writer
            title
            contents
        }
    }

`


export default function BoardsEditPage(){
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: Number(router.query.myNumber) }
    })


    return(
        <>
            <BoardWrite 
            isEdit={true} 
            data={data}
            />
        </>
        
    )
}