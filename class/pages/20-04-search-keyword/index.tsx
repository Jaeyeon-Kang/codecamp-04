import { ChangeEvent, MouseEvent, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";
import styled from "@emotion/styled";

interface IProps {
  isMatched: boolean;
}
const MyWord = styled.span`
  color: ${(props: IProps) => (props.isMatched ? "red" : "black")};
`;
const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
    }
  }
`;
export default function SearchKeywordPage() {
  // const [mySearch, setMySearch] = useState("");
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
  // function onClickSearch() {
  //   refetch({ search: mySearch, page: 1 });
  //   setmyKeyword(mySearch);
  // }
  function onClickPage(event: MouseEvent<HTMLSpanElement>) {
    if (event.target instanceof Element)
      refetch({ search: myKeyword, page: Number(event?.target.id) });
  }
  return (
    <>
      <h1>검색 페이지!</h1>
      검색어 입력: <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색</button> */}
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={{ paddingRight: "50px" }}>{el.writer}</span>
          <span style={{ paddingRight: "50px" }}>
            {el.title
              .replaceAll(myKeyword, `#$%${myKeyword}#$%`)
              .split("#$%")
              .map((el) => (
                <MyWord key={uuidv4()} isMatched={myKeyword === el}>
                  {el}
                </MyWord>
              ))}
          </span>
          <span style={{ paddingRight: "50px" }}>{el.createdAt}</span>
        </div>
      ))}
      {new Array(2).fill(1).map((_, index) => (
        <span key={uuidv4()} onClick={onClickPage} id={String(index + 1)}>
          {index + 1}
        </span>
      ))}
    </>
  );
}
