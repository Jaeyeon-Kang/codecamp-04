import { useState } from 'react'
import { ImageWrapper, InputWrapper } from '../../../styles/emotion'
import {
  Wrapper,
  ProfileWrapper,
  WriterWrapper,
  ProfileImage,
  IconImage,
  ProfileData,
  Writer,
  WriteDate,
  LabelWrapper,
  Label,
  ImageWrapper2,
  ImageBox,
  ContentsWrapper,
  Contents
   
  } from "../../../styles/emotion2"
  



  export default function BoardsNew2Page() {



    return (
      <Wrapper> 
        <ProfileWrapper>
          <WriterWrapper>   
               <ProfileImage>
                <img src="/images/profile.png"/>
              </ProfileImage>
              <ProfileData>
                <Writer>노원두</Writer>
                <WriteDate>Date: 2021.02.18</WriteDate>
              </ProfileData>
            </WriterWrapper>
            <IconImage>
              <img src="/images/link.png"/>
              <img src="/images/location.png"/>
              </IconImage>
        </ProfileWrapper>
        <LabelWrapper>
          <Label>게시글 제목입니다.</Label>
        </LabelWrapper>
        <ImageWrapper2>
          <ImageBox></ImageBox>
        </ImageWrapper2>
        <ContentsWrapper>
          <Contents>
            가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하</Contents>
        {/* 이거 칸 나눠서 정리하고싶은데 띄어쓰기처리 안되게 하는 법 없나?*/}
        </ContentsWrapper>

      </Wrapper>
      
    )
  }