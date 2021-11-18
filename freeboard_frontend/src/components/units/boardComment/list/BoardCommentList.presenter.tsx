import BoardCommentListUIItem from "./BoardCommentList.presenterItem";
import { IBoardCommentListUIProps } from "./BoardCommentList.types";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <>
      {props.data?.fetchBoardComments.map((el) => (
        <BoardCommentListUIItem key={el._id} el={el} />
      ))}
    </>
  );
}
