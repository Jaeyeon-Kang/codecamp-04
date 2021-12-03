import HeaderUI from "./Header.presenter";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  function onClickSubmit() {
    router.push(`/boards/login`);
  }

  function onClickBoard() {
    router.push(`/boards`);
  }

  const onClickMyPage = () => {
    router.push(`/boards/mypage`);
  };

  return (
    <HeaderUI
      onClickSubmit={onClickSubmit}
      onClickBoard={onClickBoard}
      onClickMyPage={onClickMyPage}
    />
  );
}
