import { useRouter } from "next/router"



export default function DynamicRoutedNumberPage(){
    const router = useRouter()

    console.log(router.query.aaa)

    return(
        <div>{router.query.aaa}번 게시글 상세페이지 이동완료!!!</div>
    )

}