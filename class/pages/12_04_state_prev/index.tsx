import { useState } from "react";

const StatePrevPage = () => {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const onClickCounter = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    // 아무리 많이 해도 맨 아래것만 실행됨.
  };

  const onClickCounterTwo = () => {
    setCountTwo((prev) => prev + 1);
    setCountTwo((prev) => prev + 1);
    setCountTwo((prev) => prev + 1);
    setCountTwo((prev) => prev + 1);
    setCountTwo((prev) => prev + 1);
    setCountTwo((prev) => prev + 1);
  };

  return (
    <>
      <div>현재 카운트: {count}</div>
      <button onClick={onClickCounter}>카운트 올리기!!</button>
      <span>맨 마지막 setCount만 실행되서 1개씩밖에 안올라가는 모습</span>
      <br/><br/><br/><br/>
      <div>프리브 카운트: {countTwo}</div>
      <button onClick={onClickCounterTwo}>카운트 올리기!!</button>
      <span>이전 setState들이 prev때문에 전부 적용되서 6개씩 올라가는 모습임.    setCountTwo((prev) => prev + 1); 이렇게 생김. 
        
         </span>
    </>
  );
};
export default StatePrevPage;
