import React from "react";
import BoardReadUI from "./BoardRead.presenter";
import { useRouter } from "next/router";
import { useMutation, useQuery, gql } from "@apollo/client";
import { createElement, useState } from "react";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from "@ant-design/icons";
import { Tooltip } from "antd";

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
  query fetchBoardComments($page: Int, $boardId: ID!) {
    fetchBoardComments(page: $page, boardId: $boardId) {
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
  //carousel
  const [rating, setRating] = useState(0);

  console.log(router.query.myId);
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.myId },
  });
  const { data: putcomments } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.myId },
  });

  async function onClickDeleteBox() {
    try {
      await deleteBoard({
        variables: { boardId: data?.fetchBoard._id },
        refetchQueries: [{ query: FETCH_BOARD }],
      });
    } catch (error) {
      alert(error);
    }
  }

  function saveRating(rate) {
    setRating(rate);
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
            rating: rating,
          },
          boardId: String(router.query.myId),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.myId },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  }
  //댓글창

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction("liked");
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction("disliked");
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(
          action === "disliked" ? DislikeFilled : DislikeOutlined
        )}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];

  return (
    <BoardReadUI
      aaa={data?.fetchBoard.writer}
      bbb={bbb}
      ccc={data?.fetchBoard.title}
      ddd={data?.fetchBoard.contents}
      deletebox={onClickDeleteBox}
      listbox={onClickListBox}
      updatebox={onClickUpdateBox}
      commentButton={onClickCommentButton}
      commentContents={onChangeCommentContents}
      actions={actions}
      putcomments={putcomments}
      saveRating={saveRating}
    />
  );
}
