import HeaderUI from "./Header.presenter";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  function onClickSubmit() {
    router.push(`/login`);
  }

  function onClickBoard() {
    router.push(`/boards`);
  }

  const onClickMyPage = () => {
    router.push(`/mypage`);
  };

  const onClickMarket = () => {
    router.push(`/market/list`);
  };

  const onClickMain = () => {
    router.push(`/`)
  }

  return (
    <HeaderUI
      onClickSubmit={onClickSubmit}
      onClickBoard={onClickBoard}
      onClickMyPage={onClickMyPage}
      onClickMarket={onClickMarket}
      onClickMain={onClickMain}
    />
  );
}
