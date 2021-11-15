import BoardReadUI from "./BoardRead.presenter";
import { useRouter } from "next/router";
import { useMutation, useQuery, gql } from "@apollo/client";
import { useState } from "react";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD_COMMENT = gql`
  mutation createBoardComment(
    $createBoardCommentInput: CreateBoardCommentInput!
    $boardId: ID!
  ) {
    createBoardComment(
      createBoardCommentInput: $createBoardCommentInput
      boardId: $boardId
    ) {
      _id
      writer
      contents
      rating
      createdAt
    }
  }
`;

const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComment($page: Int, $boardId: ID!) {
    fetchBoardComment(page: $page, boardID: $boardID) {
      _id
      writer
      contents
      rating
      createdAt
    }
  }
`;

export default function BoardReadPage() {
  const router = useRouter();
  const [commentContents, setCommentContents] = useState("");
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const { CreateBoardComments } = useMutation(CREATE_BOARD_COMMENT, {
    variables: { boardId: "61912523b739c9002a0fd55e" },
  });
  const { contentscomments } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: "61912523b739c9002a0fd55e" },
  });
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.myId },
  });

  console.log(data);

  async function onClickDeleteBox() {
    try {
      await deleteBoard({
        variables: { boardId: data?.fetchBoard._id },
        refetchQueries: [{ query: FETCH_BOARD }],
      });
    } catch (error) {
      alert("에러ㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜ흑흑흐구ㅜㅜㅜㅜㅜㅜㅎ그흑");
    }
  }

  let bbb = String(data?.fetchBoard.createdAt);
  console.log(bbb);
  bbb = bbb.split("");
  console.log(bbb);
  bbb = bbb.slice(0, 10);
  console.log(bbb);
  bbb = bbb.join("");
  console.log(bbb);

  function onClickListBox() {
    router.push("/portfolioboard/listboard");
  }
  // "/05-06-dynamic-board-read/$[id]"

  function onClickUpdateBox() {
    router.push(`/portfolioboard/recreateboard/${router.query.myId}/edit`);
  }

  function onChangeCommentContents(event) {
    setCommentContents(event.target.value);
  }

  function onClickCommentButton() {
    try {
      createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: "작성자자",
            password: "1234",
            contents: commentContents,
            rating: 1,
          },
          boardId: router.query.myId,
        },
      });
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <BoardReadUI
      aaa={data?.fetchBoard.writer}
      bbb={bbb}
      ccc={data?.fetchBoard.title}
      ddd={data?.fetchBoard.contents}
      deletebox={onClickDeleteBox}
      listbox={onClickListBox}
      updatebox={onClickUpdateBox}
      createboardcomment={CreateBoardComments}
      contentscomments={contentscomments}
      commentButton={onClickCommentButton}
      commentContents={onChangeCommentContents}
    />
  );
}
