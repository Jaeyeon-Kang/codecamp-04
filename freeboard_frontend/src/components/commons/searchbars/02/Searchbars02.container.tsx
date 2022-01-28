import Searchbars02Presenter from "./Searchbars02.presenter";
import _ from "lodash";
import { ChangeEvent, MouseEvent, useState } from "react";
import { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types";
import { gql, useQuery } from "@apollo/client";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
    }
  }
`;
const Searchbars02Container = () => {
  const [myKeyword, setmyKeyword] = useState(" ");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setmyKeyword(data);
  }, 500);

  function onChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    getDebounce(event.target.value);
  }
 
  function onClickPage(event: MouseEvent<HTMLSpanElement>) {
    if (event.target instanceof Element)
      refetch({ search: myKeyword, page: Number(event?.target.id) });
  }


  return <Searchbars02Presenter 
  onClickPage={onClickPage}
  onChangeSearch={onChangeSearch}
  />;
};

export default Searchbars02Container;

