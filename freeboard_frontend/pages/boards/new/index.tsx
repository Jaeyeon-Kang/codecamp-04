import { useState } from "react";
import BoardWrite from "../../../src/components/units/board/write/BoardWrite.container";

export default function BoardsNewPage() {
  const [isEdit, setIsEdit] = useState(false);
  return <BoardWrite />;
}
