import * as S from "./MarketCommentWrite.styles";
import { IMarketCommentWriteTypes } from "./MarketCommentWrite.types";
import QuestionItem from "./item/item";
import AnswerList from "../../answer/list/MarketAnswerList.container";

export default function MarketCommentWritePresenter(
  props: IMarketCommentWriteTypes
) {
  return (
    <>
      <S.Wrapper>
        <h3>문의하기</h3>
        <div>
          <input
            type="text"
            placeholder="문의내용"
            onChange={props.onChangeContents}
            value={props.contents}
          />
          <button onClick={props.onClickAddQuestion}>문의 등록하기</button>
        </div>

        {props.useditemQuestions?.fetchUseditemQuestions.map((el) => (
          <div key={el._id} style={{ border: "3px solid black" }}>
            <QuestionItem el={el} refetch={props.refetch} />

            <AnswerList questionId={el._id} />
          </div>
        ))}
        <button onClick={props.onLoadMore}>더보기</button>
      </S.Wrapper>
    </>
  );
}
