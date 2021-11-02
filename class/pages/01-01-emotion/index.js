// localhost:3000/01-01-emotion 쳐야 이거 실행됨.
// _app.js (설정파일)이 먼저 실행되고서 index.js가 실행됨. 설정파일은 나중에 한다고...복잡해서..
// 초반엔 index.js 보고 따라한다고 함


import {MyDiv, MyInput} from '../../styles/emotion'

export default function EmotionPage(){
    // return 기준으로 위는 자바스크립트, 아래는 JSX (리액트 전용 html)쓰는 곳임.
    // export default는 브라우저로 페이지를 내보내라는 뜻 


    return(
        <>
        <MyDiv>로그인</MyDiv><br/><br/>
        아이디 <br/>
        <MyInput type="text"/><br/><br/>
        비밀번호 
        <MyInput type="text"/> 
        나의이미지: <img src="/images/lotto.png"/>
        </>
        // 두 줄 이상 입력시 () 필수, 한 줄일 경우는 생략 가능. 
        // 리액트는 Fragment (<>)로 위아래 감싸줘야함
        ) 
}


