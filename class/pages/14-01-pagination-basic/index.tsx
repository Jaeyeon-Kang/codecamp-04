import { gql, useQuery } from "@apollo/client";
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

export default function PaginationBasicPage() {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, { variables: { page: 1 } });
  function onClickPage(event) {
    refetch({ page: Number(event.target.id) });
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
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
        <span
          key={el}
          onClick={onClickPage}
          id={String(el)}
          style={{ margin: "10px", cursor: "pointer" }}
        >
          {el}
        </span>
      ))}

      {/* <span onClick={onClickPage} id="1">
        {" "}
        1{" "}
      </span>
      <span onClick={onClickPage} id="2">
        {" "}
        2{" "}
      </span>
      <span onClick={onClickPage} id="3">
        {" "}
        3{" "}
      </span>
      <span onClick={onClickPage} id="4">
        {" "}
        4{" "}
      </span>
      <span onClick={onClickPage} id="5">
        {" "}
        5{" "}
      </span>
      <span onClick={onClickPage} id="6">
        {" "}
        6{" "}
      </span>
      <span onClick={onClickPage} id="7">
        {" "}
        7{" "}
      </span>
      <span onClick={onClickPage} id="8">
        {" "}
        8{" "}
      </span>
      <span onClick={onClickPage} id="9">
        {" "}
        9{" "}
      </span>
      <span onClick={onClickPage} id="10">
        {" "}
        10{" "}
      </span> */}
    </>
  );
}
