import { useRouter } from "next/router"

export default function DynamicRoutedNumberPage(){
    const router = useRouter()
    
    return(
        <h1>{router.query.aaa}번 게시글 상세페이지 이동완료!</h1>

    )
}