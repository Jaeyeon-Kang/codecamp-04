import { useState } from "react";

export default function MyLifeCyclePage() {
  console.log("렌더링시작");
  const [count, setCount] = useState(0);
 // ss 
  // 1번 케이스 - 최초 1번 실행(DidMount)
  // useEffect(() => {
  //   console.log("최초 한번 실행됨");
  // }, []);

  // 2번케이스 - 의존성배열의 count 감지 후 재실행
  // useEffect(() => {
  //   console.log("count가 변경되면 재실행");
  // }, [count]);
  // commit 
 // commit
 // commit

  // 3번케이스 - 최초렌더링 +1
  // useEffect(() => {
  //   setCount(100);
  // }, []);

  // 4번케이스 - 무한루프
  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // }, [count]);

  function onClickCounter() {
    setCount((prev) => prev + 1);
  }
  // test

  return (
    <>
      <div>현재카운트: {count}</div>
      <button onClick={onClickCounter}>카운트 올리기</button>
    </>
  );
}
