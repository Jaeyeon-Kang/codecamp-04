import { useRouter } from "next/router";

export default function KaKaoMapRoutingPage() {
  const router = useRouter();

  function onClickMoveToMap() {
    router.push("/29-03-kakao-map-routed");
  }

  return (
    <>
      <button onClick={onClickMoveToMap}>맵으로 이동하기!!!</button>
    </>
  );
}
