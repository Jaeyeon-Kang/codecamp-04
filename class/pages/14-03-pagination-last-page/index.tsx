import { gql, useQuery } from "@apollo/client";
import { useState, MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

const FETCH_BOARDS_COUNTS = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;
export default function PaginationBasicPage() {
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
    <>
      <h1>페이지네이션 연습</h1>
      <div>
        {data?.fetchBoards?.map((el) => (
          <div key={el._id}>
            {el.title}
            {el.writer}
          </div>
        ))}
      </div>
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
    </>
  );
}
