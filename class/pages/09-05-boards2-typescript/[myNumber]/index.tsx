import { useRouter } from "next/router"
import { useQuery, gql } from "@apollo/client"

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number: $number){
            writer
            title
            contents
        }
    }
`
// 그래프ql에서는 #으로 주석


export default function DynamicProductReadPage(){
    const router = useRouter()
    console.log(router.query)
    
    const { data } = useQuery(FETCH_BOARD, {
        variables: { 
            number: Number(router.query.myNumber)
         }
    })

    console.log(data)

    function edit(){
        router.push(`/09-05-boards2-typescript/${router.query.myNumber}/edit`)
    }

    return(
        <>
            <div>나의 게시글 번호: {router.query.myNumber}</div>
            <div>작성자: {data?.fetchBoard.writer}</div>
            <div>제목: {data?.fetchBoard.title}</div>
            <div>내용: {data?.fetchBoard.contents}</div>
            <button onClick={edit}>수정</button>
        </>
    )
}