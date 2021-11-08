import {MyButton} from './BoardWrite.styles'


export default function BoardWriteUI(props){


    return(
        <>
        <MyButton onClick={props.aaa}> 1번 게시글로 이동하기 </MyButton> 
        <MyButton onClick={props.bbb}> 2번 게시글로 이동하기 </MyButton> 
        <MyButton onClick={props.ccc}> 3번 게시글로 이동하기 </MyButton> 
        </>
    )

}