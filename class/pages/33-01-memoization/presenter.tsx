import { memo } from "react";
const MemoizationUI = (props) => {
  console.log("프레젠터가 렌더링됩니다.");
  return (
    <>
      <div>====================</div>
      <div>이것은 프레젠터</div>
      <div>====================</div>
    </>
  );
};
export default memo(MemoizationUI);
