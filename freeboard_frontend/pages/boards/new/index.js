import { useState } from 'react'
import { useRouter } from 'next/router'
import {
    Address,
    ButtonWrapper,
    Contents,
    ImageWrapper,
    InputWrapper,
    Label,
    DivError,
    OptionWrapper,
    Password,
    RadioButton,
    RadioLabel,
    SearchButton,
    Subject,
    SubmitButton,
    Title,
    Wrapper,
    Writer,
    WriterWrapper,
    Youtube,
    Zipcode,
    ZipcodeWrapper,
    UploadButton
  } from "../../../styles/emotion"
  
import { useMutation, gql } from '@apollo/client'
const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput:CreateBoardInput!){
        createBoard(createBoardInput:$createBoardInput) {
            _id
            writer
            title
            contents
            updatedAt
        }}
    `



  export default function BoardsNewPage() {
    const router = useRouter()
    const [createBoard] = useMutation(CREATE_BOARD)
    const [writer, setWriter] = useState("")
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")


    function onChangeWriter(event){
      setWriter(event.target.value)
    }
    function onChangePassword(event){
      setPassword(event.target.value)
    }
    function onChangeTitle(event){   
      setTitle(event.target.value)
    }
    function onChangeContents(event){
      setContents(event.target.value)
    }
  

    async function onClickSubmitButton() {
        try {
        const result = await createBoard(
            { variables:{
                createBoardInput: {
                    writer: writer,
                    title: title,
                    contents: contents,
                    password: password
                }
         }}
        )
        
       router.push(`/boards/new2/${result.data.createBoard._id}`) }
       catch(error){
       console.log(error.message)
      }
    }
    return (
      <Wrapper>
        <Title>게시판 등록</Title>
        <WriterWrapper>
          <InputWrapper>
            <Label>작성자</Label>
            <Writer type="text" onChange={onChangeWriter} placeholder="이름을 적어주세요." />
      
          </InputWrapper>
          <InputWrapper>
            <Label>비밀번호</Label>
            <Password type="password" onChange={onChangePassword}/>
          </InputWrapper>
        </WriterWrapper>
        <InputWrapper>
          <Label>제목</Label>
          <Subject type="text" onChange={onChangeTitle} placeholder="제목을 작성해주세요." />
        </InputWrapper>
        <InputWrapper>
          <Label>내용</Label>
          <Contents onChange={onChangeContents} placeholder="내용을 작성해주세요." />
        </InputWrapper>
        <InputWrapper>
          <Label>주소</Label>
          <ZipcodeWrapper>
            <Zipcode placeholder="07250" readOnly />
            <SearchButton>우편번호 검색</SearchButton>
          </ZipcodeWrapper>
          <Address  readOnly />
          <Address />
        </InputWrapper>
        <InputWrapper>
          <Label>유튜브</Label>
          <Youtube placeholder="링크를 복사해주세요." />
        </InputWrapper>
        <ImageWrapper>
          <Label>사진첨부</Label>
          <UploadButton>
            <>+</>
            <>Upload</>
          </UploadButton>
          <UploadButton>
            <>+</>
            <>Upload</>
          </UploadButton>
          <UploadButton>
            <>+</>
            <>Upload</>
          </UploadButton>
        </ImageWrapper>
        <OptionWrapper>
          <Label>메인설정</Label>
          <RadioButton type="radio" id="youtube" name="radio-button" />
          <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
          <RadioButton type="radio" id="image" name="radio-button" />
          <RadioLabel htmlFor="image">사진</RadioLabel>
        </OptionWrapper>
        <ButtonWrapper>
          <SubmitButton onClick={onClickSubmitButton}>등록하기</SubmitButton>
        </ButtonWrapper>
      </Wrapper>
    );
  }