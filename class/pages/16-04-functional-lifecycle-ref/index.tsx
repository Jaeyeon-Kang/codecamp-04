import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function MyLifeCyclePage() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  // 태그에 변수를 담는다.
  const [count, setCount] = useState(0);

  // componentDidMount와 동일
  useEffect(() => {
    console.log("마운트됨");
    inputRef.current?.focus();
    // componentWillUnmount와 동일

    return () => {
      console.log("잘가요");
    };
  }, []);
  // 뒤 [] 를 의존성 배열이라고 한다. dependency array. 저 배열에 의존하고 있다는 뜻. 
  // 예를들어 [count]라고 치면, count 가 바뀌고 useEffect가 실행된다는 뜻이다. 
  // 의존성배열이 없으면, 뭐 하나라도 바뀌면 다시 실행된다. 
  // 때문에 이것은 componentDidUpdate와 비슷하다.
  // 그런데 useEffect는 처음엔 무조건 실행이 되고 componentDidUpdate는 수정될때 실행된다.

  useEffect(() => {
    console.log("수정됨");
  });
  // 뭐 하나라도 바뀌면 다시 실행. componentDidUpdate와 비슷.

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
