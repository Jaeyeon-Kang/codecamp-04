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
  Error,
} from "./BoardWrite.styles";
import { IBoardWriteUIProps } from "./BoardWrite.types";
import { Modal } from "antd";
import { DaumPostcode } from "react-daum-postcode";

import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  // const [isModalVisible, setIsModalVisible] = useState(false);
  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };
  // const handleCancel = () => {
  //   setIsModalVisible(false);
  // };
  return (
    <>
      {/* {props.isOpen && (
        <Modal visible={true}>
          <DaumPostcode onComplete={props.onCompleteAddressSearch} />
        </Modal>
      )} */}

      {props.isModalVisible && (
        <Modal
          visible={true}
          onOk={props.handleOk}
          onCancel={props.handleCancel}
        >
          <DaumPostcode onComplete={props.onCompleteAddressSearch} />
        </Modal>
      )}

      <Wrapper>
        <Title>{props.isEdit ? "게시판 수정" : "게시판 등록"}</Title>
        <WriterWrapper>
          <InputWrapper>
            <Label>작성자</Label>
            <Writer
              type="text"
              placeholder="이름을 적어주세요."
              onChange={props.onChangeMyWriter}
              readOnly={Boolean(props.data?.fetchBoard.writer)}
              defaultValue={props.data?.fetchBoard.writer || ""}
            />
            <Error>{props.myWriterError}</Error>
          </InputWrapper>
          <InputWrapper>
            <Label>비밀번호</Label>
            <Password type="password" onChange={props.onChangeMyPassword} />
            <Error>{props.myPasswordError}</Error>
          </InputWrapper>
        </WriterWrapper>
        <InputWrapper>
          <Label>제목</Label>
          <Subject
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={props.onChangeMyTitle}
            defaultValue={props.data?.fetchBoard.title}
          />
          <Error>{props.myTitleError}</Error>
        </InputWrapper>
        <InputWrapper>
          <Label>내용</Label>
          <Contents
            placeholder="내용을 작성해주세요."
            onChange={props.onChangeMyContents}
            defaultValue={props.data?.fetchBoard.contents}
          />
          <Error>{props.myContentsError}</Error>
        </InputWrapper>
        <InputWrapper>
          <Label>주소</Label>
          <ZipcodeWrapper>
            <Zipcode
              placeholder="07250"
              readOnly
              value={
                props.zipcode ||
                props.data?.fetchBoard.boardAddress?.zipcode ||
                ""
              }
            />

            {/* <SearchButton onClick={props.onClickAddressSearch}> */}
            <SearchButton onClick={() => props.setIsModalVisible(true)}>
              우편번호 검색
            </SearchButton>
          </ZipcodeWrapper>
          <Address
            readOnly
            value={
              props.address ||
              props.data?.fetchBoard.boardAddress?.address ||
              ""
            }
          />
          <Address
            onChange={props.onChangeAddressDetail}
            defaultValue={
              props.data?.fetchBoard.boardAddress?.addressDetail || ""
            }
          />
        </InputWrapper>
        <InputWrapper>
          <Label>유튜브</Label>
          <Youtube
            placeholder="링크를 복사해주세요."
            onChange={props.onChangeMyYoutubeUrl}
            defaultValue={props.data?.fetchBoard.youtubeUrl || ""}
          />
        </InputWrapper>
        <ImageWrapper>
          <Label>사진첨부</Label>
          {props.fileUrls.map((el, index) => (
            <Uploads01
              key={uuidv4()}
              index={index}
              fileUrl={el}
              defaultFileUrl={props.data?.fetchBoard.images?.[index]}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
        </ImageWrapper>
        <OptionWrapper>
          <Label>메인설정</Label>
          <RadioButton type="radio" id="youtube" name="radio-button" />
          <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
          <RadioButton type="radio" id="image" name="radio-button" />
          <RadioLabel htmlFor="image">사진</RadioLabel>
        </OptionWrapper>
        <ButtonWrapper>
          <SubmitButton
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
            isActive={props.isActive}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </SubmitButton>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}
