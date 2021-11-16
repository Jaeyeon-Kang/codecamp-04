import { useState } from "react";

export default function StatePrevPage() {
  const [count, setCount] = useState(0);

  function onClickCounter() {
    setCount(count + 1);
  }
  return (
    <>
      <div> 현재카운트: {count}</div>
      <button onClick={onClickCounter}>카운트 올리기!!</button>
    </>
  );
}
