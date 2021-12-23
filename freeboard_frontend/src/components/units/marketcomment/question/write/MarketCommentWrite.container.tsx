import MarketCommentWritePresenter from "./MarketCommentWrite.presenter";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { useState, ChangeEvent } from "react";
import { Modal } from "antd";
import {
  IMutation,
  IMutationCreateUseditemQuestionArgs,
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../../commons/types/generated/types";
import {
  CREATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
} from "./MarketCommentWrite.queries";

export default function MarketCommentWriteContainer() {
  const router = useRouter();
  const [contents, setContents] = useState("");
  const [createQuestion] = useMutation<
    Pick<IMutation, "createUseditemQuestion">,
    IMutationCreateUseditemQuestionArgs
  >(CREATE_USED_ITEM_QUESTION);

  const {
    data: useditemQuestions,
    fetchMore,
    refetch,
  } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USED_ITEM_QUESTIONS, {
    variables: {
      useditemId: String(router.query.myId),
    },
  });

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  const onClickAddQuestion = async () => {
    try {
      await createQuestion({
        variables: {
          createUseditemQuestionInput: { contents },
          useditemId: String(router.query.myId),
        },
      });
      console.log("등록은 된듯");
      refetch();
      setContents("");
    } catch (error) {
      error instanceof Error && Modal.error({ content: error.message });
    }
  };

  const onLoadMore = () => {
    console.log(useditemQuestions?.fetchUseditemQuestions);
    if (!useditemQuestions) return;
    fetchMore({
      variables: {
        page:
          Math.ceil(useditemQuestions.fetchUseditemQuestions.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditemQuestions)
          return {
            fetchUseditemQuestions: [...prev.fetchUseditemQuestions],
          };

        return {
          fetchUseditemQuestions: [
            ...prev.fetchUseditemQuestions,
            ...fetchMoreResult.fetchUseditemQuestions,
          ],
        };
      },
    });
  };

  return (
    <MarketCommentWritePresenter
      onChangeContents={onChangeContents}
      contents={contents}
      onClickAddQuestion={onClickAddQuestion}
      onLoadMore={onLoadMore}
      useditemQuestions={useditemQuestions}
      refetch={refetch}
    />
  );
}
