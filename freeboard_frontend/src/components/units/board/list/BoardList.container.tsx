import BoardListUI from "./BoardList.presenter";
import { useState, MouseEvent } from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_OF_THE_BEST,
  FETCH_BOARDS_COUNTS,
} from "./BoardList.queries";
import {
  IQueryFetchBoardsArgs,
  IQuery,
} from "../../../../commons/types/generated/types";

export default function BoardList(props) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [startPage, setStartPage] = useState(1);
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const { data: searchData } = useQuery(FETCH_BOARDS, {
    variables: {
      search: router.query.boardId,
      page: 1,
    },
  });
  console.log("searchData", searchData);

  const { data: dataBoardsCount } =
    useQuery<Pick<IQuery, "fetchBoardsCount">>(FETCH_BOARDS_COUNTS);

  const { data: bestData } = useQuery<
    Pick<IQuery, "fetchBoardsOfTheBest">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS_OF_THE_BEST);

  const lastPage = dataBoardsCount
    ? Math.ceil(dataBoardsCount.fetchBoardsCount / 10)
    : 0;

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    if (event.target instanceof Element)
      refetch({ page: Number(event.target.id) });
  };
  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev: number) => prev - 10);
  };
  const onClickNextPage = () => {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev: number) => prev + 10);
  };

  const onClickMoveToBoardNew = () => {
    router.push("/boards/new");
  };

  const onClickMoveToBoardDetail = (e) => {
    router.push(`/boards/${e.currentTarget.id}`);
  };

  const onChangeSearchInput = (e) => {
    setSearch(e.target.value);
  };

  const onClickSearch = () => {
    try {
      router.push(`/search/${search}`);
    } catch (error) {
      console.log("에러!!!");
    }
  };

  return (
    <BoardListUI
      data={data}
      searchData={searchData}
      dataBoardsCount={dataBoardsCount}
      onClickPage={onClickPage}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      startPage={startPage}
      lastPage={lastPage}
      bestData={bestData}
      isSearch={props.isSearch}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      onChangeSearchInput={onChangeSearchInput}
      onClickSearch={onClickSearch}
    />
  );
}
