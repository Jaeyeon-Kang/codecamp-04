import { useRouter } from "next/router"
import { useQuery, gql } from '@apollo/client'
//import { useState } from 'react'
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
   
  } from "../../../../styles/emotion2"

const FETCH_BOARD = gql`
    query fetchBoard ($boardId : ID!){
      fetchBoard(boardId : $boardId)
      {
        _id
        writer
        title
        contents }
  }
`




  



  export default function BoardsNew2Page() {
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
      variables: { boardId: router.query.myId }
    })
  
    console.log(data)
  

    return (
      <>
      {/* {data?.fetchBoard && */}
        <>
        <Wrapper> 
          <ProfileWrapper>
            <WriterWrapper>   
                <ProfileImage>
                  <img src="/images/profile.png"/>
                </ProfileImage>
                <ProfileData>
                  <Writer>{data.fetchBoard.writer}</Writer>
                  <WriteDate>{data.fetchBoard.updatedAt}</WriteDate>
                </ProfileData>
              </WriterWrapper>
              <IconImage>
                <img src="/images/link.png"/>
                <img src="/images/location.png"/>
                </IconImage>
          </ProfileWrapper>
          <LabelWrapper>
            <Label>{data.fetchBoard.title}</Label>
          </LabelWrapper>
          <ImageWrapper2>
            <ImageBox></ImageBox>
          </ImageWrapper2>
          <ContentsWrapper>
            <Contents>
              {data.fetchBoard.contents}
              </Contents>
          {/* 이거 칸 나눠서 정리하고싶은데 띄어쓰기처리 안되게 하는 법 없나?*/}
          </ContentsWrapper>
        </Wrapper>
         </>
       {/* } */}
      </>
    )
  }