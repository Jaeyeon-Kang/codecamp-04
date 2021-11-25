import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenapiWithUseEffectPage() {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    async function fetchDog() {
      const result: any = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      setDogUrl(result.data.message);
    }
    fetchDog();
  }, []);

  return (
    <>
      <div>오픈API 연습</div>
      <img src={dogUrl} />
    </>
  );
}

// 오늘 포폴 과제: 기존에 있었던 피그마에서 자유게시판, 중고게시판, 마이페이지 메뉴가 3개가 있었는데 무튼 메뉴를 한 개 더 만들고 나만의 메뉴를 하나 더 만들어서(ex.나의 강아지) api를 받아오는 것.
 