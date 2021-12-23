import { ChangeEventHandler, MouseEventHandler } from "react";

export interface IMarketCommentWriteTypes {
  refetch: any;
  onLoadMore: MouseEventHandler<HTMLButtonElement> | undefined;
  useditemQuestions: any;
  onClickAddQuestion: MouseEventHandler<HTMLButtonElement> | undefined;
  onChangeContents: ChangeEventHandler<HTMLInputElement> | undefined;
}
