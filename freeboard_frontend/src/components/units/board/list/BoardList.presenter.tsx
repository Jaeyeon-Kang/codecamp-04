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
} from "./BoardList.styles";
import { FETCH_BOARDS, FETCH_BOARDS_COUNTS } from "./BoardList.queries";
import { useState, MouseEvent } from "react";
import { useQuery } from "@apollo/client";
import {
  IQueryFetchBoardsArgs,
  IQuery,
} from "../../../../commons/types/generated/types";

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
      <BestCommentWrapperTop>
        {props.bestData?.fetchBoardsOfTheBest.map((el) => (
          <BestCommentWrapper key={el._id} id={el._id}>
            <BestCommentTitle> {el.title}</BestCommentTitle>
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
      {data?.fetchBoards.map((el, index) => (
        <Row key={el._id}>
          <ColumnBasic>{index + 1}</ColumnBasic>
          <ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
            {el.title}부
          </ColumnTitle>
          <ColumnBasic>{el.writer}</ColumnBasic>
          <ColumnBasic>{getDate(el.createdAt)}</ColumnBasic>
        </Row>
      ))}
      <TableBottom />
      <PageNation>
        <span onClick={onClickPrevPage}>이전페이지</span>

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
        <span onClick={onClickNextPage}>다음페이지</span>
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
