import { useRouter } from "next/router"

export default function DynamicRoutedNumberPage() {
    const router = useRouter()

    console.log(router.query.aaa)
    // 따로 변수를 두어서 하나를 통해서 라우팅을 할 수 있다.
    let number = router.query.aaa

    return (

        <div>{number}번 게시글 상세페이지 이동 완료!</div>
    )
}