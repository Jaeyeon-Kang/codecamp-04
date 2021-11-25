import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function MyLifeCyclePage() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("마운트됨");
    inputRef.current?.focus();
    //componentWillUnmount와 동일

    return () => {
      console.log("잘가요");
    };
  }, []);
  //componentDidMount와 동일

  useEffect(() => {
    console.log("수정됨");
  });
  //뭐 하나라도 바뀌면 다시 실행. componentDidUpdate와 비슷.

  function onClickCounter() {
    setCount((prev) => prev + 1);
  }
  function onClickMove() {
    router.push("/");
  }

  return (
    <>
      <input type="text" ref={inputRef} />
      <div>현재카운트: {count}</div>
      <button onClick={onClickCounter}>카운트 올리기</button>
      <button onClick={onClickMove}>페이지 이동하기!!</button>
    </>
  );
}
