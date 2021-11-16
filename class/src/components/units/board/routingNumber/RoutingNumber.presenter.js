import { MyButton } from "./RoutingNumber.styles"

export default function RoutingNumberUI(props){
    return(
        <>
            <MyButton onClick={props.aaa} >1번 게시글로 이동하기</MyButton><br />
            <MyButton onClick={props.bbb} >2번 게시글로 이동하기</MyButton><br />
            <MyButton onClick={props.ccc} >3번 게시글로 이동하기</MyButton><br />
        </>
    )
}