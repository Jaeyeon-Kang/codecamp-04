import { gql, useMutation, useQuery } from "@apollo/client";
import {
  IMutation,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;
const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;
export default function OptimisticUiPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: "61b81557717be5002baa6f45" },
    }
  );
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);
  function onClickOptimisticUi() {
    // 여기서 좋아요 증가시키는 mutation
    likeBoard({
      variables: { boardId: "61b81557717be5002baa6f45" },
      //
      // 리패치 될때까지 기다리는 식
      //   refetchQueries: [
      //     {
      //       query: FETCH_BOARD,
      //       variables: { boardId: "61b81557717be5002baa6f45" },
      //     },
      //   ],
      //
      //
      // 옵티미스틱 리스폰스 사용하는 식
      optimisticResponse: {
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1,
      }, // 여기 데이터는 fetchBoard로 받아온 데이터, 아래는 업데이트 된 데이터
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "61b81557717be5002baa6f45" },
          data: {
            fetchBoard: {
              _id: "61b81557717be5002baa6f45",
              __typename: "Board",
              // 위 두개는 그냥 룰임. 아폴로 룰이래
              likeCount: data?.likeBoard,
              // 두번 받아오는 데이터.. 더 빠르게 받아올 수 있다고
            },
          },
        });
      },
    });
  }
  return (
    <>
      <div>좋아요 갯수:{data?.fetchBoard.likeCount}</div>
      <button onClick={onClickOptimisticUi}> 좋아요 올리기</button>
    </>
  );
}
