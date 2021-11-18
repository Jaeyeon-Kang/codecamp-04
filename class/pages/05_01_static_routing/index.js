import { useRouter } from 'next/router'

export default function StaticRoutingPage() {
    
    const router = useRouter()

    function onClickMove() {
        router.push('/05_02_static_routed')
    }

    return (
        <button onClick={onClickMove}>페이지 이동하기 !</button>

    )
}