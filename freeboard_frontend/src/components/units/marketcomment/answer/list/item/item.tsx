import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationDeleteUseditemQuestionAnswerArgs,
  IMutationUpdateUseditemQuestionAnswerArgs,
} from "../../../../../../commons/types/generated/types";

const UPADTE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation updateUseditemQuestionAnswer(
    $useditemQuestionAnswerId: ID!
    $updateUseditemQuestionAnswerInput: UpdateUseditemQuestionAnswerInput!
  ) {
    updateUseditemQuestionAnswer(
      useditemQuestionAnswerId: $useditemQuestionAnswerId
      updateUseditemQuestionAnswerInput: $updateUseditemQuestionAnswerInput
    ) {
      _id
      contents
    }
  }
`;

const DELETE_USED_ITEM_QUESTION_ANSWER = gql`
  mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!) {
    deleteUseditemQuestionAnswer(
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    )
  }
`;

export default function AnswerItem(props: any) {
  const [updateContents, setUpdateContents] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const [updateAnswer] = useMutation<
    Pick<IMutation, "updateUseditemQuestionAnswer">,
    IMutationUpdateUseditemQuestionAnswerArgs
  >(UPADTE_USED_ITEM_QUESTION_ANSWER);
  const [deleteAnswer] = useMutation<
    Pick<IMutation, "deleteUseditemQuestionAnswer">,
    IMutationDeleteUseditemQuestionAnswerArgs
  >(DELETE_USED_ITEM_QUESTION_ANSWER);

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setUpdateContents(event.target.value);
  };

  const onClickUpdate = () => setIsEdit(true);

  const onClickUpdateAnswer = (id: string) => async () => {
    try {
      await updateAnswer({
        variables: {
          useditemQuestionAnswerId: id,
          updateUseditemQuestionAnswerInput: {
            contents: updateContents,
          },
        },
      });
      Modal.success({ content: "수정이 완료되었습니다." });
      setIsEdit(false);
      props.refetch();
    } catch (error) {
      error instanceof Error && Modal.error({ content: error.message });
      setIsEdit(false);
    }
  };

  const onClickDeleteAnswer = (id: string) => async () => {
    try {
      await deleteAnswer({
        variables: { useditemQuestionAnswerId: String(id) },
      });
      Modal.success({ content: "답변이 삭제되었습니다." });
      props.refetch();
    } catch (error) {
      error instanceof Error && Modal.error({ content: error.message });
    }
  };

  return (
    <>
      {isEdit ? (
        <div key={props.el._id}>
          <input onChange={onChangeContents} defaultValue={props.el.contents} />
          /
          <br />
          <span>{props.el.user.name}</span>
          <button onClick={onClickUpdateAnswer(props.el._id)}>수정하기</button>
        </div>
      ) : (
        <div key={props.el._id}>
          <span>{props.el.contents} / </span>
          <span>{props.el.user.name}</span>
          <button onClick={onClickUpdate}>수정하기</button>
          <button onClick={onClickDeleteAnswer(props.el._id)}>삭제하기</button>
        </div>
      )}
    </>
  );
}
