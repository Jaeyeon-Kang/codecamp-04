import { Tooltip } from "antd";
import * as S from "./BoardDetail.styles";
import { IBoardDetailUIProps } from "./BoardDetail.types";
import { v4 as uuidv4 } from "uuid";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <S.Wrapper>
      <S.CardWrapper>
        <S.Header>
          <S.AvatarWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.Info>
              <S.Writer>{props.data?.fetchBoard.writer}</S.Writer>
              <S.CreatedAt>{props.data?.fetchBoard.createdAt}</S.CreatedAt>
            </S.Info>
          </S.AvatarWrapper>

          <S.IconWrapper>
            <S.LinkIcon src="/images/board/detail/link.png" />
            <Tooltip
              placement="topRight"
              title={`${props.data?.fetchBoard.boardAddress?.address}${props.data?.fetchBoard.boardAddress?.addressDetail}`}
            ></Tooltip>
          </S.IconWrapper>
        </S.Header>
        <S.Body>
          <S.Title>{props.data?.fetchBoard.title}</S.Title>
          <S.Contents>{props.data?.fetchBoard.contents}</S.Contents>
          {props.data?.fetchBoard.youtubeUrl && (
            <S.Youtube
              url={props.data?.fetchBoard.youtubeUrl}
              width="1200px"
              height="720px"
            />
          )}
          {props.data?.fetchBoard.images?.map((_, index) => (
            <S.Images
              key={uuidv4()}
              src={`https://storage.googleapis.com/${props.data?.fetchBoard.images?.[index]}`}
              width="486px"
              height="240px"
            />
          ))}

          <S.LikeWrapper>
            <S.IconWrapper>
              <S.LikeIcon onClick={props.onClickLike} />
              <S.LikeCount>{props.data?.fetchBoard.likeCount}</S.LikeCount>
            </S.IconWrapper>
            <S.IconWrapper>
              <S.DislikeIcon onClick={props.onClickDislike} />
              <S.DislikeCount>
                {props.data?.fetchBoard.dislikeCount}
              </S.DislikeCount>
            </S.IconWrapper>
          </S.LikeWrapper>
        </S.Body>
      </S.CardWrapper>
      <S.BottomWrapper>
        <S.Button onClick={props.onClickMoveToList}>목록으로</S.Button>
        <S.Button onClick={props.onClickMoveToUpdate}>수정하기</S.Button>
        <S.Button onClick={props.onClickDelete}>삭제하기</S.Button>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
