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

// https://medium.com/@freshmilkdev/reactjs-render-optimization-for-collapsible-material-ui-long-list-with-checkboxes-231b36892e20 material libraries를 사용했을 때 렌더가 느리다면 여기를 확인해보자.
// Wappalyzer -> 평소에 궁금했던 사이트가 뭘로 만들었는지 알아볼 수 있음.
