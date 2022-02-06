import {
  Title,
  BottomWrapper,
  Button,
  Contents,
  ContentsLength,
  ContentsWrapper,
  Input,
  InputWrapper,
  PencilIcon,
  Star,
  Wrapper,
  TopWrapper
} from "./BoardCommentWrite.styles";
import { IBoardCommentWriteUIProps } from "./BoardCommentWrite.types";

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps) {
  return (
    <TopWrapper>
    <Wrapper>
      {!props.isEdit && (
        <>
          {/* <PencilIcon src="/images/boardComment/write/pencil.png" /> */}
          <Title>Comment</Title>
        </>
      )}
      <InputWrapper>
        <Input
          placeholder="Writer"
          readOnly={Boolean(props.el?.writer)}
          defaultValue={props.el?.writer || ""}
          onChange={props.onChangeMyWriter}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={props.onChangeMyPassword}
        />
        <Star onChange={props.onChangeStar} />
      </InputWrapper>
      <ContentsWrapper>
        <Contents
          maxLength={90}
          defaultValue={props.el?.contents}
          onChange={props.onChangeMyContents}
          placeholder="Comment here"
        />
        <BottomWrapper>
          <ContentsLength>{props.myContents.length}/100</ContentsLength>
          <Button
            onClick={props.isEdit ? props.onClickUpdate : props.onClickWrite}
          >
            {props.isEdit ? "Update" : "Write"}
          </Button>
        </BottomWrapper>
      </ContentsWrapper>
    </Wrapper>
    </TopWrapper>
  );
}
