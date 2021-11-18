import {Footer__Navigation, Footer__Navigation__Home, Footer__Navigation__Like, Footer__Navigation__Location, Footer__Navigation__My, 
    Footer__Navigation__Name, HeaderArrowRight, HeaderBottom, HeaderBottomNav, HeaderBottomNavFaq,
    HeaderProfile, HeaderSearch, HeaderTop, HeaderTopName, HeaderTopRight, HeaderTopTitle, 
    Line, ListQuestion, ListQuestionNumber, Question, QuestionIcon, Wrapper, 
    WrapperHeader, Wrapper__Body, Wrapper__Body__List, Wrapper__Footer,Footer__Navigation__Name_Color } from '../../../styles/faq'

export default function MyFaq() {

    return(
        <Wrapper>
            <WrapperHeader>
                <HeaderSearch src="/images/ic-58-main-search-black.png"/>
                <HeaderTop>
                    <HeaderTopTitle>마이</HeaderTopTitle>
                    <HeaderTopRight>
                        <HeaderProfile src="/images/img-60-profile-image.png"/>
                        <HeaderTopName>임정아</HeaderTopName>
                        <HeaderArrowRight src="/images/ic-28-arrow.png"/>
                    </HeaderTopRight>
                </HeaderTop>
                <HeaderBottom>
                    <HeaderBottomNav>공지사항</HeaderBottomNav>
                    <HeaderBottomNav>이벤트</HeaderBottomNav>
                    <HeaderBottomNavFaq>FAQ</HeaderBottomNavFaq>
                    <HeaderBottomNav>Q&A</HeaderBottomNav>
                </HeaderBottom>
            </WrapperHeader>
            <Line></Line>
            <Wrapper__Body>
                <Wrapper__Body__List>
                    <Question>
                        <ListQuestionNumber>Q.01</ListQuestionNumber>
                        <ListQuestion>리뷰 작성은 어떻게 하나요</ListQuestion>
                    </Question>
                    <Question>
                        <QuestionIcon src="/images/ic-70-arrow-right.png"/>
                    </Question>
                </Wrapper__Body__List>
                <Wrapper__Body__List>
                    <Question>
                        <ListQuestionNumber>Q.02</ListQuestionNumber>
                        <ListQuestion>리뷰 작성은 어떻게 하나요</ListQuestion>
                    </Question>
                    <>
                        <QuestionIcon src="/images/ic-70-arrow-right.png"/>
                    </>
                </Wrapper__Body__List>
                <Wrapper__Body__List>
                    <Question>
                        <ListQuestionNumber>Q.03</ListQuestionNumber>
                        <ListQuestion>리뷰 작성은 어떻게 하나요</ListQuestion>
                    </Question>
                    <>
                        <QuestionIcon src="/images/ic-70-arrow-right.png"/>
                    </>
                </Wrapper__Body__List>
                <Wrapper__Body__List>
                    <Question>
                        <ListQuestionNumber>Q.04</ListQuestionNumber>
                        <ListQuestion>리뷰 작성은 어떻게 하나요</ListQuestion>
                    </Question>
                    <>
                        <QuestionIcon src="/images/ic-70-arrow-right.png"/>
                    </>
                </Wrapper__Body__List>
                <Wrapper__Body__List>
                    <Question>
                        <ListQuestionNumber>Q.05</ListQuestionNumber>
                        <ListQuestion>리뷰 작성은 어떻게 하나요</ListQuestion>
                    </Question>
                    <>
                        <QuestionIcon src="/images/ic-70-arrow-right.png"/>
                    </>
                </Wrapper__Body__List>
                <Wrapper__Body__List>
                    <Question>
                        <ListQuestionNumber>Q.01</ListQuestionNumber>
                        <ListQuestion>리뷰 작성은 어떻게 하나요</ListQuestion>
                    </Question>
                    <>
                        <QuestionIcon src="/images/ic-70-arrow-right.png"/>
                    </>
                </Wrapper__Body__List>
            </Wrapper__Body>
            <Line></Line>
            <Wrapper__Footer>
                <Footer__Navigation>
                    <Footer__Navigation__Home src="/images/ic-58-main-home-unselected.png"/>
                    <Footer__Navigation__Name>홈</Footer__Navigation__Name>
                </Footer__Navigation>
                <Footer__Navigation>
                    <Footer__Navigation__Location src="/images/ic-58-main-location-unselected.png"/>
                    <Footer__Navigation__Name>잇츠로드</Footer__Navigation__Name>
                </Footer__Navigation>
                <Footer__Navigation>
                    <Footer__Navigation__Like src="/images/ic-58-main-like-unselected.png"/>
                    <Footer__Navigation__Name>마이찜</Footer__Navigation__Name>
                </Footer__Navigation>
                <Footer__Navigation>
                    <Footer__Navigation__My src="/images/ic-58-main-my-selected.png"/>
                    <Footer__Navigation__Name_Color>마이</Footer__Navigation__Name_Color>
                </Footer__Navigation>
            </Wrapper__Footer>
        </Wrapper>
        

    )

}