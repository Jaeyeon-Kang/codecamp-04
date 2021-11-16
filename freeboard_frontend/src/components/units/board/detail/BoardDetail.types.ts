import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardDetailUIProps {
  data?: Pick<IQuery, "fetchBoard">;
  onClickLike: () => void;
  onClickDislike: () => void;
  onClickMoveToList: () => void;
  onClickMoveToUpdate: () => void;
  onClickDelete: () => void;
}
