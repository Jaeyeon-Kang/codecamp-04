import { useEffect, useState, useRef } from "react";

export default function ImagePreloadPage() {
  const [myLoadedImage, setMyLoadedImage] = useState();
  const divRef = useRef(null);
  useEffect(() => {
    const img = new Image();
    img.src = "https://codebootcamp.co.kr/images/main/homeImage1.webp";
    img.onload = () => {
      setMyLoadedImage(img);
    };
  }, []);

  function onClickButton() {
    divRef.current?.appendChild(myLoadedImage);
  }

  //   function onClickButton2() {
  //     setMyLoad(true);
  //   }

  return (
    <>
      <h1>안녕하세요 사이트에 오신 것을 환영합니다</h1>
      <div ref={divRef}></div>
      <button onClick={onClickButton}>이미지 보여주기</button>
      <img src="https://codebootcamp.co.kr/images/main/homeImage1.webp" />
    </>
    // webp 확장자라 빨리 뜨는 것임.
  );
}
// https://www.npmjs.com/package/react-lazyload 데이터 아끼려면 이거 쓰기

// developers.google.com/speed 웹 속도 체크해주는 사이트
