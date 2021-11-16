import { MyDiv, MyInput, SmallText, Wrapper } from "../../styles/emotion";

export default function EmotionPage() {
  return (
    <>
        <MyDiv>로그인</MyDiv>
        <Wrapper>
            <div>
            <SmallText>아이디</SmallText>
            <MyInput type="text" />
            </ div>
            <div>
            <SmallText>비밀번호</SmallText>
            <MyInput type="text" />
            </ div>
        </Wrapper>
        나의 이미지: <img src="/images/lotto.png" />
    </>
  );
}
