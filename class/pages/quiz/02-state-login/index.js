import { useState } from "react"

import {
    LoginInput,
    SmallText,
    DeleteButton,
    MenuBar,
    MenuButton,
    KakaoLoginButton,
    LoginButton,
    Title,
    RoadIcon,
    All,
    Wrapper,
    HeadWrapper,
    KakaoIcon,
    EmailWrapper,
    PasswordWrapper,
    SeparateBar
} from "../../../styles/login"

export default function Login() {

    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")

    function first(event){
        setEmail(event.target.value)
    }

    function second(event){
        setPassword(event.target.value)
    }

    function third(){
        if(email.includes("@") === false){
            setEmailError("이메일 주소를 다시 확인해주세요.")
        }
        if(password.length < 8 || password.length > 16){
            setPasswordError("8~16자의 영문, 숫자, 특수 문자만 사용 가능합니다.")
        }
    }


    return (
        <All>
            <Wrapper>
                <HeadWrapper>
                    <RoadIcon src="../../../images/roadicon.png" />
                    <Title>잇츠로드</Title>
                </HeadWrapper>
                <EmailWrapper>
                    <LoginInput type="text" placeholder="이메일을 입력하세요." onChange={first} />
                    <DeleteButton src="../../../images/deleteicon.png" />
                </EmailWrapper>
                    <SmallText>{emailError}</SmallText>
                <PasswordWrapper>
                    <LoginInput type="password" placeholder="비밀번호를 입력하세요." onChange={second} />
                    <DeleteButton src="../../../images/deleteicon.png" />
                </PasswordWrapper>
                    <SmallText>{passwordError}</SmallText>
                <LoginButton onClick={third}>로그인</LoginButton>
                <MenuBar>
                    <MenuButton>이메일 찾기</MenuButton>
                    <SeparateBar></SeparateBar>
                    <MenuButton>비밀번호 찾기</MenuButton>
                    <SeparateBar></SeparateBar>
                    <MenuButton>회원가입</MenuButton>
                </MenuBar>
                <KakaoLoginButton>
                    <KakaoIcon src="../../../images/kakaoicon.png" />
                    <div>
                        카카오톡으로 로그인
                    </div>
                </KakaoLoginButton>
            </Wrapper>
        </All>
    )

}