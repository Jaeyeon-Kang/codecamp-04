import { useRouter } from 'next/router' // 넥스트는 리액트 업그레이드버전


export default function StaticRoutingPage(){
    const router = useRouter()

    function onClickMove(){
        router.push('/05-02-static-routed')
    }

    return (
        <button onclick={onClickMove}> 페이지 이동하기!! </button> //onClickMove는 이벤트 핸들러
    
    )

}