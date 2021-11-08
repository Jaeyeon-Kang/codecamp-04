import { useRouter } from "next/router"
import { useQuery, gql } from '@apollo/client'
//import { useState } from 'react'
import {
  Wrapper,
  ProfileWrapper,
  WriterWrapper,
  ProfileImage,
  IconImage,
  Link,
  Location,
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
        contents 
        createdAt}
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
      {data?.fetchBoard &&
        <>
        <Wrapper> 
          <ProfileWrapper>
            <WriterWrapper>   
                <ProfileImage>
                  <img src="/images/profile.png"/>
                </ProfileImage>
                <ProfileData>
                  <Writer>{data.fetchBoard.writer}</Writer>
                  <WriteDate>{data.fetchBoard.createdAt}</WriteDate>
                </ProfileData>
              </WriterWrapper>
              <IconImage>
                <Link><img src="/images/link.png"/></Link>
                <Location><img src="/images/location.png"/></Location>
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
          </ContentsWrapper>
        </Wrapper>
         </>
       }
      </>
    )
  }