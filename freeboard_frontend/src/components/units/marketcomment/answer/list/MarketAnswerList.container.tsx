import { gql, useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateUseditemQuestionAnswerArgs,
  IQuery,
  IQueryFetchUseditemQuestionAnswersArgs,
} from "../../../../../commons/types/generated/types";

import AnswerItem from "./item/item";

const CREATE_USED_ITEM_QUESTION_ANSWERS = gql`
  mutation createUseditemQuestionAnswer(
    $useditemQuestionId: ID!
    $createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput!
  ) {
    createUseditemQuestionAnswer(
      useditemQuestionId: $useditemQuestionId
      createUseditemQuestionAnswerInput: $createUseditemQuestionAnswerInput
    ) {
      _id
      contents
      user {
        _id
        name
      }
    }
  }
`;

const FETCH_USED_ITEM_QUESTION_ANSWERS = gql`
  query fetchUseditemQuestionAnswers($page: Int, $useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(
      page: $page
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      user {
        _id
        email
        name
      }
    }
  }
`;

export default function AnswerList(props: any) {
  const [contents, setContents] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchUseditemQuestionAnswers">,
    IQueryFetchUseditemQuestionAnswersArgs
  >(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: String(props.questionId) },
  });

  const [createAnswer] = useMutation<
    Pick<IMutation, "createUseditemQuestionAnswer">,
    IMutationCreateUseditemQuestionAnswerArgs
  >(CREATE_USED_ITEM_QUESTION_ANSWERS);

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  const onClickAddAnswer = async () => {
    await createAnswer({
      variables: {
        useditemQuestionId: String(props.questionId),
        createUseditemQuestionAnswerInput: { contents },
      },
    });
    refetch();
  };

  return (
    <div style={{ border: "2px solid gold" }}>
      <h3>답글목록</h3>
      <input type="text" placeholder="답변내용" onChange={onChangeContents} />
      <button onClick={onClickAddAnswer}>답변 등록하기</button>
      {data?.fetchUseditemQuestionAnswers.map((el) => (
        <AnswerItem key={el._id} el={el} refetch={refetch} />
      ))}
    </div>
  );
}
