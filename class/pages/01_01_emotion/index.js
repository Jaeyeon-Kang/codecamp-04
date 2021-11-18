import { MyDiv, MyInput, Mywrapper, TagName } from '../../styles/emotion'


// 페이지에 하나씩 작성하기 위해서 export default
export default function EmotionPage() {
    // 자바스크립트를 작성하는 곳(JavaScript)


    
    return (
        // 부모 태그로 감싸서 하나의 그룹으로 내보내야 한다.
        // 내부 태그 자체로 내보내려면 부모 태그의 이름을 지워주면된다.(Fragment)
        // React 전용 html을 작성하는 곳(JSX)
        // 2줄 이상은 괄호가 필수적이지만, 한 줄만 입력시에는 괄호 생략이 가능하다.
        <Mywrapper> 
            <MyDiv>로그인</MyDiv>
            <TagName>이메일</TagName><MyInput type="text"/>
            <TagName>비밀번호</TagName><MyInput type="password"/>
            나의 이미지: <img src="/images/lotto.png"/>
        </Mywrapper>

        
    )

}