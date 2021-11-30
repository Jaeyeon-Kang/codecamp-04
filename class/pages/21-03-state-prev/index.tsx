import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  function onClickCount() {
    // 1. 화살표함수
    // setCount((prev) => prev + 1);

    // 2. 그냥함수
    // setCount(function (prev) {
    //   return prev + 1;
    // });

    // 3. 화살표함수에서 매개변수 바꾸기
    setCount((aaaa) => aaaa + 1);
  }
  return (
    <>
      <div>현재카운트: {count}</div>

      <button onClick={onClickCount}>카운트 증가!!!</button>
    </>
  );
}
