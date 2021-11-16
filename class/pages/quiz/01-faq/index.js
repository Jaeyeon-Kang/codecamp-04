import {ArrowRightImage, ProfileImage, SearchIconWrapper, SearchIcon, Icon, ArrowDownImage, ArrowDownWrapper, MenuBar, NoticeBody, NoticeWrapper, NoticeContentWrapper, UnderHeadMy, MyRight, HeadMy, MyTitle, MyName, Notice, Event, Faq, Qna, ContentDate, NoticeContent, Home, Road, Jim, My} from "../../../styles/MyNotice"

import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { chevrondown } from "@fortawesome/free-solid-svg-icons";

export default function MyNotice() {
    return (
        <>
            <SearchIconWrapper>
                <SearchIcon src="../../../images/search.png" />
            </SearchIconWrapper>
            <HeadMy>
                <MyTitle>
                    마이
                </MyTitle>
                <MyRight>
                    <ProfileImage src="../../../images/profileimage.png" />
                    <MyName>임정아</MyName>
                    <ArrowRightImage src="../../../images/arrowright.png" />
                </MyRight>
            </HeadMy>
            <UnderHeadMy>
                <Notice>공지사항</Notice>
                <Event>이벤트</Event>
                <Faq>FAQ</Faq>
                <Qna>Q&A</Qna>
            </UnderHeadMy>
            <NoticeBody>
                <NoticeWrapper>
                    <NoticeContentWrapper>
                        <ContentDate>2020.09.19</ContentDate>
                        <NoticeContent>9월달 시스템 점검 안내입니다.</NoticeContent>
                    </NoticeContentWrapper>
                    <NoticeContentWrapper>
                        <ContentDate>2020.09.17</ContentDate>
                        <NoticeContent>안녕하세요! 공지사항 전달드립니다.</NoticeContent>
                    </NoticeContentWrapper>
                    <NoticeContentWrapper>
                        <ContentDate>2020.09.12</ContentDate>
                        <NoticeContent>개인정보 처리방침 변경 사전 안내</NoticeContent>
                    </NoticeContentWrapper>
                    <NoticeContentWrapper>
                        <ContentDate>2020.08.10</ContentDate>
                        <NoticeContent>iOS 10.0 이하 지원 중단 안내</NoticeContent>
                    </NoticeContentWrapper>
                    <NoticeContentWrapper>
                        <ContentDate>2020.08.01</ContentDate>
                        <NoticeContent>이용약관 변경 사전 안내</NoticeContent>
                    </NoticeContentWrapper>
                    <NoticeContentWrapper>
                        <ContentDate>2020.07.19</ContentDate>
                        <NoticeContent>개인정보 처리방침 변경 사전 안내</NoticeContent>
                    </NoticeContentWrapper>
                </NoticeWrapper>
                <ArrowDownWrapper>
                    <ArrowDownImage src="../../../images/arrowdown.png" />
                    <ArrowDownImage src="../../../images/arrowdown.png" />
                    <ArrowDownImage src="../../../images/arrowdown.png" />
                    <ArrowDownImage src="../../../images/arrowdown.png" />
                    <ArrowDownImage src="../../../images/arrowdown.png" />
                    <ArrowDownImage src="../../../images/arrowdown.png" />
                </ArrowDownWrapper>
            </NoticeBody>
            <MenuBar>
                <Home>
                    <Icon src="../../../images/home.png" />
                    <div>홈</div>
                </Home>
                <Road>
                    <Icon src="../../../images/road.png" />
                    <div>잇츠로드</div>
                </Road>
                <Jim>
                    <Icon src="../../../images/jim.png" />
                    <div>마이찜</div>
                </Jim>
                <My>
                    <Icon src="../../../images/my.png" />
                    <div>마이</div>
                </My>
            </MenuBar>
        </>
    )

}