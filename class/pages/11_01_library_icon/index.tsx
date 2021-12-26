import { StepForwardOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyIcon = styled(StepForwardOutlined)`
  font-size: 50px;
  color: red;
`;

export default function LibraryIconPage() {
  return <MyIcon id="aaa" />;
}

// 스타일이 먹여진 아이콘이 된 MyIcon을 가져와서 쓰는 것임.
// console 찍어보면 id가 너무나 알 수 없게 나온다. id를 써서 구분.
// 그러나 이렇게하면 id를 꺼내올 수 없음. onClick={onClickLike} 처럼 쓸 수 없나? 나중에 배운다고.. router.query.[boardId]로 가져와야 한다고.
