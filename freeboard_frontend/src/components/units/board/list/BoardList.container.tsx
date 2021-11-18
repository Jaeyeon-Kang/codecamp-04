import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS } from "./BoardList.queries";
import { useRouter } from "next/router";

import {
  IQueryFetchBoardsArgs,
  IQuery,
} from "../../../../commons/types/generated/types";

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  function onClickMoveToBoardNew() {
    router.push("/boards/new");
  }

  function onClickMoveToBoardDetail(event) {
    router.push(`/boards/${event.target.id}`);
  }

  return (
    <BoardListUI
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
    />
  );
}
