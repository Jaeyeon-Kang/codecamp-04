import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
  IMutationUpdateUseditemQuestionArgs,
} from "../../../../../../commons/types/generated/types";

const DELETE_USEDE_ITEM_QUESTION = gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`;

const UPDATE_USED_ITEM_QUESTION = gql`
  mutation updateUseditemQuestion(
    $useditemQuestionId: ID!
    $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
  ) {
    updateUseditemQuestion(
      useditemQuestionId: $useditemQuestionId
      updateUseditemQuestionInput: $updateUseditemQuestionInput
    ) {
      _id
      contents
    }
  }
`;

export default function QuestionItem(props: any) {
  const [updateContents, setUpdateContents] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const [updateQuestion] = useMutation<
    Pick<IMutation, "updateUseditemQuestion">,
    IMutationUpdateUseditemQuestionArgs
  >(UPDATE_USED_ITEM_QUESTION);
  const [deleteQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_USEDE_ITEM_QUESTION);

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setUpdateContents(event.target.value);
  };

  const onClickUpdate = () => setIsEdit(true);

  const onClickUpdateQuestion = async () => {
    try {
      await updateQuestion({
        variables: {
          useditemQuestionId: props.el._id,
          updateUseditemQuestionInput: { contents: updateContents },
        },
      });
      Modal.success({ content: "수정 완료" });
      setIsEdit(false);
      props.refetch();
    } catch (error) {
      error instanceof Error && Modal.error({ content: error.message });
      setIsEdit(false);
    }
  };

  const onClickDeleteQuestion = (id: string) => async () => {
    try {
      await deleteQuestion({ variables: { useditemQuestionId: id } });
      Modal.success({ content: "삭제완료" });
      props.refetch();
    } catch (error) {
      error instanceof Error && Modal.error({ content: error.message });
    }
  };

  return (
    <>
      {isEdit ? (
        <>
          <h2>{props.el._id}</h2>
          <h3>{props.el.user.name}</h3> <br />
          <input
            type="text"
            defaultValue={props.el.contents}
            onChange={onChangeContents}
          />
          <button onClick={onClickUpdateQuestion}>수정하기</button>
        </>
      ) : (
        <>
          <h2>{props.el._id}</h2>
          <h3>{props.el.user.name}</h3>
          <span>{props.el.contents}</span>
          <button onClick={onClickUpdate}>수정하기</button>
          <button onClick={onClickDeleteQuestion(props.el._id)}>
            삭제하기
          </button>
        </>
      )}
    </>
  );
}
