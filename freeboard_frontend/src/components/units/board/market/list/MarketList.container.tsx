import MarketListPresenter from "./MarketList.presenter";
import { FETCH_USED_ITEMS } from "./MarketList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IBoard,
  IUseditem,
} from "../../../../../commons/types/generated/types";

export default function MarketListContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEMS);

  console.log(data);

  function onClickMarketDetail(event) {
    router.push(`/boards/market/${event.target.id}`);
  }

  function onClickMarketWrite() {
    router.push(`/boards/market/write`);
  }

  const onClickBasket = (el: IUseditem) => () => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");

    // let isExists = false;
    // baskets.forEach((basketEl: IUseditem) => {
    //   if (el._id === basketEl._id) isExists = true;
    // });
    // if (isExists) {
    //   alert("이미 장바구니에 담으셨습니다");
    //   return;
    // }
    // const { __typename, ...newEl } = el;
    // baskets.push(newEl);
    baskets.push(el);
    localStorage.setItem("basket", JSON.stringify(baskets));
    router.push(`/boards/market/basket`);
  };

  return (
    <MarketListPresenter
      data={data}
      onClickMarketDetail={onClickMarketDetail}
      onClickBasket={onClickBasket}
      onClickMarketWrite={onClickMarketWrite}
    />
  );
}
