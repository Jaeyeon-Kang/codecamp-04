import MarketDetailPresenter from "./MarketDetail.presenter";
import { useQuery, useMutation } from "@apollo/client";
import {
  FETCH_USED_ITEM,
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USED_ITEM,
  TOGGLE_USED_ITEM_PICK,
} from "./MarketDetail.queries";
import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";

// 카카오맵 관련
declare const window: typeof globalThis & {
  kakao: any;
};

export default function MarketDetailContainer() {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.myId,
    },
  });
  console.log(data);

  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );

  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);

  function onClickMarketList() {
    router.push("/market/list");
  }

  const onClickPurchase = async () => {
    try {
      const result = await createPointTransactionOfBuyingAndSelling({
        variables: {
          useritemId: router.query.myId,
        },
      });
      console.log(result);
      alert("구매에 성공하셨습니다");
      router.push("/mypage");
    } catch (error) {
      alert(error.message);
    }
  };

  async function onClickDelete() {
    try {
      await deleteUseditem({
        variables: { useditemId: String(router.query.myId) },
      });
      alert("게시물이 삭제되었습니다.");
      router.push("/boards/market/list");
    } catch (error) {
      alert(error.message);
    }
  }

  async function onClickMarketUpdate() {
    router.push(`/boards/market/${router.query.myId}/edit`);
  }

  async function onClickWishList() {
    try {
      await toggleUseditemPick({
        variables: { useditemId: String(router.query.myId) },
      });
      alert("찜 성공!!");
      router.push("/boards/mypage");
    } catch (error) {
      alert(error.message);
    }
  }

  // 카카오 주소 보이기

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&libraries=services&appkey=c1573b07307af25f6bb7415ff47e92fc";

    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        if (!data?.fetchUseditem?.useditemAddress?.address) return;
        const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
        const options = {
          //지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
          level: 3, //지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options);
        console.log("asfsafasdfa");

        // // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        // // 주소로 좌표를 검색합니다
        geocoder.addressSearch(
          `${data?.fetchUseditem?.useditemAddress?.address}`,
          function (result, status) {
            console.log("aa", result);
            // 정상적으로 검색이 완료됐으면
            if (status === kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              // 결과값으로 받은 위치를 마커로 표시합니다
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              // 인포윈도우로 장소에 대한 설명을 표시합니다
              // const infowindow = new window.kakao.maps.InfoWindow({
              //   content:
              //     '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>',
              // });
              // infowindow.open(map, marker);

              // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [data?.fetchUseditem?.useditemAddress?.address]);

  return (
    <MarketDetailPresenter
      data={data}
      onClickMarketList={onClickMarketList}
      onClickPurchase={onClickPurchase}
      onClickDelete={onClickDelete}
      onClickMarketUpdate={onClickMarketUpdate}
      onClickWishList={onClickWishList}
    />
  );
}
