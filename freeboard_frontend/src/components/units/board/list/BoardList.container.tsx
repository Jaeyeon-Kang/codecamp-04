import BoardListUI from "./BoardList.presenter";
import { useState, MouseEvent, ChangeEvent } from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import _ from "lodash";
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
  const [myKeyword, setmyKeyword] = useState(" ");
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );



  const { data: dataBoardsCount } =
    useQuery<Pick<IQuery, "fetchBoardsCount">>(FETCH_BOARDS_COUNTS);

  const { data: bestData } = useQuery<
    Pick<IQuery, "fetchBoardsOfTheBest">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS_OF_THE_BEST);

  const lastPage = dataBoardsCount
    ? Math.ceil(dataBoardsCount.fetchBoardsCount / 10)
    : 0;

    function onClickPage(event: MouseEvent<HTMLSpanElement>) {
      if (event.target instanceof Element)
        refetch({ search: myKeyword, page: Number(event?.target.id) });
    }


  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setmyKeyword(data);
  }, 500);

  function onChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
  }
  
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



  return (
    <BoardListUI
      data={data}
      // searchData={searchData}
      dataBoardsCount={dataBoardsCount}
      onClickPage={onClickPage}
      onChangeSearch={onChangeSearch}
      onClickPrevPage={onClickPrevPage}
      onClickNextPage={onClickNextPage}
      startPage={startPage}
      lastPage={lastPage}
      bestData={bestData}
      isSearch={props.isSearch}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}

   
    />
  );
}
