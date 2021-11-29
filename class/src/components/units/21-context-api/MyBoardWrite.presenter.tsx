import { useContext } from "react";
import { MyContext } from "../../../../pages/21-04-context-api";

export default function MyBoardWriteUI() {
  const { isEdit } = useContext(MyContext);

  return <div>{isEdit ? "수정하기" : "등록하기"}</div>;
}
