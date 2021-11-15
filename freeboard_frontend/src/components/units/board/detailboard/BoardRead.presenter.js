import {
  FullBox,
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
  Contents,
  RouterBox,
  GoListBox,
  DoCorrectBox,
  DoDeleteBox,
  CommentBoxWrapper,
  CreateBoardComment,
} from "../../../../../styles/detailboardemotion";
import { Rate } from "antd";
import { Comment, Tooltip, Avatar } from "antd";
import moment from "moment";
import { Button } from "antd";

export default function BoardReadUI(props) {
  return (
    <>
      <FullBox>
        <Wrapper>
          <ProfileWrapper>
            <WriterWrapper>
              <ProfileImage>
                <img src="/images/profile.png" />
              </ProfileImage>
              <ProfileData>
                <Writer>{props.aaa}</Writer>
                <WriteDate>{props.bbb}</WriteDate>
              </ProfileData>
            </WriterWrapper>
            <IconImage>
              <Link>
                <img src="/images/link.png" />
              </Link>
              <Location>
                <img src="/images/location.png" />
              </Location>
            </IconImage>
          </ProfileWrapper>
          <LabelWrapper>
            <Label>{props.ccc}</Label>
          </LabelWrapper>
          <ImageWrapper2>
            <ImageBox></ImageBox>
          </ImageWrapper2>
          <ContentsWrapper>
            <Contents>{props.ddd}</Contents>
          </ContentsWrapper>
        </Wrapper>
        <RouterBox>
          <GoListBox onClick={props.listbox}> 목록으로</GoListBox>
          <DoCorrectBox onClick={props.updatebox}> 수정하기 </DoCorrectBox>
          <DoDeleteBox onClick={props.deletebox}>삭제하기</DoDeleteBox>
        </RouterBox>
        <CommentBoxWrapper>
          {/* 댓글 ANTD */}
          <Rate disabled defaultValue={2} />
          <Comment
            actions={props.actions}
            author={<a>Han Solo</a>}
            avatar={
              <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
            }
            content={<p>{props.putcomments}</p>}
            datetime={
              <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                <span>{moment().fromNow()}</span>
              </Tooltip>
            }
          />

          {/* 댓글 ANTD */}
          <Rate allowHalf defaultValue={2.5} />
          <CreateBoardComment
            type="text"
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            onChange={props.commentContents}
          ></CreateBoardComment>

          <Button type="primary" onClick={props.commentButton}>
            등록하기
          </Button>
        </CommentBoxWrapper>
      </FullBox>
    </>
  );
}
