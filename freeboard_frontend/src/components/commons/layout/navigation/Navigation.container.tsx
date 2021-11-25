import NavigationUI from "./Navigation.presenter";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();

  function onClickSubmit() {
    router.push(`/boards`);
  }

  return (
    <NavigationUI
      onClickSubmit={onClickSubmit}
      onMoveMypage={() => router.push(`/boards/MyPage`)}
    />
  );
}
