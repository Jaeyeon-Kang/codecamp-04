import { useRouter } from "next/router";
import BoardDetailUI from "./BoardDetail.presenter";
import { useQuery, useMutation } from "@apollo/client";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

export default function BoardDetail() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables: { boardId: String(router.query.boardId) } }
  );
  console.log(data);

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);
  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);

  function onClickMoveToList() {
    router.push("/boards");
  }

  function onClickMoveToUpdate() {
    router.push(`/boards/${router.query.boardId}/edit`);
  }

  async function onClickDelete() {
    try {
      await deleteBoard({
        variables: { boardId: String(router.query.boardId) },
      });
      alert("게시물이 삭제되었습니다.");
      router.push("/boards");
    } catch (error) {
      alert(error.message);
    }
  }

  function onClickLike() {
    likeBoard({
      variables: { boardId: String(router.query.boardId) },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
      ],
    });
  }

  function onClickDislike() {
    dislikeBoard({
      variables: { boardId: String(router.query.boardId) },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
      ],
    });
  }
  console.log(data?.fetchBoard.images);

  return (
    <BoardDetailUI
      data={data}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToUpdate={onClickMoveToUpdate}
      onClickDelete={onClickDelete}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
    />
  );
}
