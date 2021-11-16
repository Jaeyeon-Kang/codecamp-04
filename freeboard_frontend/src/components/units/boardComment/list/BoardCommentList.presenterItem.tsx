import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { Modal } from "antd";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import BoardCommentWrite from "../write/BoardCommentWrite.container";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./BoardCommentList.queries";
import {
  Avatar,
  Contents,
  DateString,
  DeleteIcon,
  FlexWrapper,
  ItemWrapper,
  MainWrapper,
  WriterWrapper,
  OptionWrapper,
  Star,
  UpdateIcon,
  Writer,
} from "./BoardCommentList.styles";
import { IBoardCommentListUIItemProps } from "./BoardCommentList.types";

export default function BoardCommentListUIItem(
  props: IBoardCommentListUIItemProps
) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [deleteBoardComment] =
    useMutation<
      Pick<IMutation, "deleteBoardComment">,
      IMutationDeleteBoardCommentArgs
    >(DELETE_BOARD_COMMENT);

  function onClickUpdate() {
    setIsEdit(true);
  }

  async function onClickDelete() {
    const myPassword = prompt("비밀번호를 입력하세요.");
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      {!isEdit && (
        <ItemWrapper>
          <FlexWrapper>
            <Avatar src="/images/avatar.png" />
            <MainWrapper>
              <WriterWrapper>
                <Writer>{props.el?.writer}</Writer>
                <Star value={props.el?.rating} disabled />
              </WriterWrapper>
              <Contents>{props.el?.contents}</Contents>
            </MainWrapper>
            <OptionWrapper>
              <UpdateIcon
                src="/images/boardComment/list/option_update_icon.png/"
                onClick={onClickUpdate}
              />
              <DeleteIcon
                src="/images/boardComment/list/option_delete_icon.png/"
                onClick={onClickDelete}
              />
            </OptionWrapper>
          </FlexWrapper>
          <DateString>{props.el?.createdAt}</DateString>
        </ItemWrapper>
      )}
      {isEdit && (
        <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
}
