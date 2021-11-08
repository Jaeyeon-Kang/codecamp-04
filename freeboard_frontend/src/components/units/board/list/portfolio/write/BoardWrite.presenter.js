
import {
    Address,
    ButtonWrapper,
    Contents,
    ImageWrapper,
    InputWrapper,
    Label,
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
  } from "../../../../../../../styles/emotion"

  


export default function BoardWriteUI(props){
  
    return (
        <>
    
        <Wrapper>
        <Title>게시판 등록</Title>
        <WriterWrapper>
          <InputWrapper>
            <Label>작성자</Label>
            <Writer type="text" onChange={props.ocw} placeholder="이름을 적어주세요." />
      
          </InputWrapper>
          <InputWrapper>
            <Label>비밀번호</Label>
            <Password type="password" onChange={props.ocp}/>
          </InputWrapper>
        </WriterWrapper>
        <InputWrapper>
          <Label>제목</Label>
          <Subject type="text" onChange={props.oct} placeholder="제목을 작성해주세요." />
        </InputWrapper>
        <InputWrapper>
          <Label>내용</Label>
          <Contents onChange={props.occ} placeholder="내용을 작성해주세요." />
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
          <SubmitButton onClick={props.ocsb} hhh={props.hhh}> 등록하기</SubmitButton>
        </ButtonWrapper>
      </Wrapper>
    </>

    )
}
