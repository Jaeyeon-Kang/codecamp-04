import { useState } from 'react'
import { Logo, Wrapper, Header, Title, Body, Footer, 
         Menu, Input, BodyLine, BodyLogin, UnderLogo, 
         LogoWrapper, MenuLine, MenuTitle, FooterLogin, BodyInput, Error  } from '../../../styles/road_emotion'

export default function RoadPage() {

    const [email, setEmail] = useState("")
    const [emailerror, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    const [passworderror, setPasswordError] = useState("")

    function SingupEmail(event) {
        setEmail(event.target.value)
    }

    function SingupPassword(event) {
        setPassword(event.target.value)
    }

    function ErrorMessage() {
        if(email.includes("@") === false ) {
            setEmailError("이메일 주소를 다시 확인해주세요!")
        }
        
        if(password.length < 8 || password.length > 16) {
            setPasswordError("8-16자의 영문, 숫자, 특수 문자만 사용가능합니다.")
        }
    }


    return (

        <Wrapper>
            <Header>
                <LogoWrapper>
                    <Logo src="/images/img-100-logo-white.png" />
                    <UnderLogo src="/images/rectangle.png"/>
                </LogoWrapper>
                <Title>잇츠로드</Title>
            </Header>
            <Body>
                <BodyInput>
                    <Input type="text" onChange={SingupEmail}/>
                    <img src="/images/ic-20-delete-white.png"/>
                </BodyInput>
                <Error>{emailerror}</Error>
                <BodyInput>
                    <Input type="password" onChange={SingupPassword}/>
                    <img src="/images/ic-20-delete-white.png"/>
                </BodyInput>
                <Error>{passworderror}</Error>
                <BodyLogin onClick={ErrorMessage}>로그인</BodyLogin>
            </Body>
            <Menu>
                <MenuTitle>이메일 찾기</MenuTitle><MenuLine></MenuLine>
                <MenuTitle>비밀번호 찾기</MenuTitle><MenuLine></MenuLine>
                <MenuTitle>회원가입</MenuTitle>
            </Menu>
            <Footer>
                <FooterLogin>
                    <img />
                    카카오톡으로 로그인
                </FooterLogin>
            </Footer>
        </Wrapper>

    )
}