import { getDate } from "../../../../commons/libraries/utils";
import {
  Wrapper,
  TableTop,
  TableBottom,
  Row,
  ColumnHeaderBasic,
  ColumnHeaderTitle,
  ColumnBasic,
  ColumnTitle,
  Footer,
  PencilIcon,
  Button,
  PageNation,
  BestCommentWrapper,
  BestCommentTitle,
  BestCommentWriter,
  BestCommentDate,
  BestCommentLikeIcon,
  BestCommentLikeCount,
  BestCommentImageIcon,
  BestCommentWrapperTop,
  NextPage,
  BestCommentImage,
  TextToken,
} from "./BoardList.styles";
import { FETCH_BOARDS, FETCH_BOARDS_COUNTS } from "./BoardList.queries";
import { useState, MouseEvent } from "react";
import { useQuery } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";
import {
  IQueryFetchBoardsArgs,
  IQuery,
} from "../../../../commons/types/generated/types";
import Searchbars01 from "../../../commons/searchbars/01/Searchbars01.container";

export default function BoardListUI(props) {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, { variables: { page: startPage } });
  const { data: dataBoardsCount } =
    useQuery<Pick<IQuery, "fetchBoardsCount">>(FETCH_BOARDS_COUNTS);
  const lastPage = dataBoardsCount
    ? Math.ceil(dataBoardsCount.fetchBoardsCount / 10)
    : 0;

  function onClickPage(event: MouseEvent<HTMLSpanElement>) {
    if (event.target instanceof Element)
      refetch({ page: Number(event.target.id) });
  }
  function onClickPrevPage() {
    if (startPage === 1) return;
    //1페이지는 return해서 의미가 없게끔.
    setStartPage((prev: number) => prev - 10);
  }
  function onClickNextPage() {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev: number) => prev + 10);
  }
  return (
    <Wrapper>
      {/* <Searchbars01
        refetch={props.refetch}
        refetchBoardsCount={props.refetchBoardsCount}
        onChangeKeyword={props.onChangeKeyword}
      /> */}
      <input type="text" onChange={props.onChangeSearchInput} />
      <button onClick={props.onClickSearch}>검색</button>
      <BestCommentWrapperTop>
        {props.bestData?.fetchBoardsOfTheBest.map((el) => (
          <BestCommentWrapper key={el._id}>
            <BestCommentImage src="/images/carousel_1.jpg" />
            <BestCommentTitle
              id={el._id}
              onClick={props.onClickMoveToBoardDetail}
            >
              {el.title
                .replaceAll(props.keyword, `@#$%{props.keyword}@#$%`)
                .split("@#$%")
                .map((el) => (
                  <TextToken key={uuidv4()} isMatched={props.keyword === el}>
                    {el}
                  </TextToken>
                ))}
            </BestCommentTitle>
            <BestCommentImageIcon></BestCommentImageIcon>
            <BestCommentWriter>{el.writer}</BestCommentWriter>
            <BestCommentDate>{getDate(el.createdAt)}</BestCommentDate>
            <BestCommentLikeIcon src="/images/board/list/like.png" />
            <BestCommentLikeCount>{el.likeCount}</BestCommentLikeCount>
          </BestCommentWrapper>
        ))}
      </BestCommentWrapperTop>
      <TableTop />
      <Row>
        <ColumnHeaderBasic>번호</ColumnHeaderBasic>
        <ColumnHeaderTitle>제목</ColumnHeaderTitle>
        <ColumnHeaderBasic>작성자</ColumnHeaderBasic>
        <ColumnHeaderBasic>날짜</ColumnHeaderBasic>
      </Row>

      {!props.isSearch && (
        <>
          {data?.fetchBoards.map((el, index) => (
            <Row key={el._id}>
              <ColumnBasic>{index + 1}</ColumnBasic>
              <ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
                {el.title}
              </ColumnTitle>
              <ColumnBasic>{el.writer}</ColumnBasic>
              <ColumnBasic>{getDate(el.createdAt)}</ColumnBasic>
            </Row>
          ))}
        </>
      )}
      {props.isSearch && (
        <>
          {props.searchData?.fetchBoards?.map((el, index) => (
            <Row key={el._id}>
              <ColumnBasic>{index + 1}</ColumnBasic>
              <ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
                {el.title}
              </ColumnTitle>
              <ColumnBasic>{el.writer}</ColumnBasic>
              <ColumnBasic>{getDate(el.createdAt)}</ColumnBasic>
            </Row>
          ))}
        </>
      )}

      <TableBottom />
      <PageNation>
        <NextPage onClick={onClickPrevPage}>이전페이지</NextPage>

        {new Array(10).fill(1).map(
          (_, index) =>
            startPage + index <= lastPage && (
              <span
                key={startPage + index}
                onClick={onClickPage}
                id={String(startPage + index)}
                style={{ margin: "10px", cursor: "pointer" }}
              >
                {startPage + index}
              </span>
            )
        )}
        <NextPage onClick={onClickNextPage}>다음페이지</NextPage>
      </PageNation>
      <Footer>
        <Button onClick={props.onClickMoveToBoardNew}>
          <PencilIcon src="/images/board/list/write.png" />
          게시물 등록하기
        </Button>
      </Footer>
    </Wrapper>
  );
}
