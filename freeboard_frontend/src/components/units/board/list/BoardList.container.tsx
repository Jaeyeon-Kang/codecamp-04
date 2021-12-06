import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_OF_THE_BEST } from "./BoardList.queries";
import { useRouter } from "next/router";

import {
  IQueryFetchBoardsArgs,
  IQuery,
} from "../../../../commons/types/generated/types";
import { useState } from "react";

export default function BoardList(props) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );
  const { data: searchData } = useQuery(FETCH_BOARDS, {
    variables: {
      search: router.query.myId,
      page: 1,
    },
  });
  const { data: bestData } = useQuery<
    Pick<IQuery, "fetchBoardsOfTheBest">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS_OF_THE_BEST);

  console.log(data);

  function onClickMoveToBoardNew() {
    router.push("/boards/new");
  }

  function onClickMoveToBoardDetail(event) {
    router.push(`/boards/${event.target.id}`);
  }

  const onChangeSearchInput = (event) => {
    setSearch(event.target.value);
  };

  const onClickSearch = () => {
    try {
      router.push(`/boards/search/${search}`);
    } catch (error) {
      alert("에러!!!");
    }
  };

  return (
    <BoardListUI
      data={data}
      searchData={searchData}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      bestData={bestData}
      onChangeSearchInput={onChangeSearchInput}
      onClickSearch={onClickSearch}
      isSearch={props.isSearch}
    />
  );
}
