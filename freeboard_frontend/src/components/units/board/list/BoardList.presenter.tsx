import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./BoardList.styles";
import { v4 as uuidv4 } from "uuid";

export default function BoardListUI(props) {
  return (
    <S.Wrapper>
      <input type="text" onChange={props.onChangeSearchInput} />
      <button onClick={props.onClickSearch}>검색</button>
      <S.BestCommentWrapperTop>
        {props.bestData?.fetchBoardsOfTheBest.map((el) => (
          <S.BestCommentWrapper key={el._id}>
            <S.BestCommentImage src="/images/carousel_1.jpg" />
            <S.BestCommentTitle
              id={el._id}
              onClick={props.onClickMoveToBoardDetail}
            >
              {el.title
                .replaceAll(props.keyword, `@#$%{props.keyword}@#$%`)
                .split("@#$%")
                .map((el) => (
                  <S.TextToken key={uuidv4()} isMatched={props.keyword === el}>
                    {el}
                  </S.TextToken>
                ))}
            </S.BestCommentTitle>
            <S.BestCommentImageIcon></S.BestCommentImageIcon>
            {/* <S.BestWriterToDate> */}
            {/* <S.BestCommentWriter>{el.writer}</S.BestCommentWriter> */}
            {/* <S.BestCommentDate>{getDate(el.createdAt)}</S.BestCommentDate> */}
            {/* </S.BestWriterToDate> */}
            <S.BestIconToCount>
            <S.BestCommentLikeIcon src="/images/boardComment/list/like.png" />
            <S.BestCommentLikeCount>{el.likeCount}</S.BestCommentLikeCount>
            </S.BestIconToCount>
          </S.BestCommentWrapper>
        ))}
      </S.BestCommentWrapperTop>
      <S.TableTop />
      <S.Row>
        <S.ColumnHeaderBasic>번호</S.ColumnHeaderBasic>
        <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
        <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
        <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
      </S.Row>

      {!props.isSearch && (
        <>
          {props.data?.fetchBoards.map((el, index) => (
            <S.Row key={el._id}>
              <S.ColumnBasic>{index + 1}</S.ColumnBasic>
              <S.ColumnTitle
                id={el._id}
                onClick={props.onClickMoveToBoardDetail}
              >
                {el.title}
              </S.ColumnTitle>
              <S.ColumnBasic>{el.writer}</S.ColumnBasic>
              <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
            </S.Row>
          ))}
        </>
      )}
      {props.isSearch && (
        <>
          {props.searchData?.fetchBoards?.map((el, index) => (
            <S.Row key={el._id}>
              <S.ColumnBasic>{index + 1}</S.ColumnBasic>
              <S.ColumnTitle
                id={el._id}
                onClick={props.onClickMoveToBoardDetailstartPage}
              >
                {el.title}
              </S.ColumnTitle>
              <S.ColumnBasic>{el.writer}</S.ColumnBasic>
              <S.ColumnBasic>{getDate(el.createdAt)}</S.ColumnBasic>
            </S.Row>
          ))}
        </>
      )}
      <S.TableBottom />
      <S.PageNation>
        <S.NextPage onClick={props.onClickPrevPage}>이전페이지</S.NextPage>

        {new Array(10).fill(1).map(
          (_, index) =>
            props.startPage + index <= props.lastPage && (
              <span
                key={props.startPage + index}
                onClick={props.onClickPage}
                id={String(props.startPage + index)}
                style={{ margin: "10px", cursor: "pointer" }}
              >
                {props.startPage + index}
              </span>
            )
        )}
        <S.NextPage onClick={props.onClickNextPage}>다음페이지</S.NextPage>
      </S.PageNation>
      <S.Footer>
        <S.Button onClick={props.onClickMoveToBoardNew}>
          <S.PencilIcon src="/images/board/list/write.png" />
          게시물 등록하기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
