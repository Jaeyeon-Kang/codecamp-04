import MarketListPresenter from "./MarketList.presenter";
import { FETCH_USED_ITEMS } from "./MarketList.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
  IUseditem,
} from "../../../../commons/types/generated/types";
import { isDefinitionNode } from "graphql";
import { useState } from "react";

export default function MarketListContainer() {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);

  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEMS);
  console.log("data", data);

  const onClickMarketDetail = (event: any) => {
    // console.log("el.id",el._id)
    console.log("event.target", event.target);
    router.push(`/market/${event?.target?.id}`);
  };

  function onClickMarketWrite() {
    router.push(`/market/write`);
  }

  function onLoadMore() {
    if (!data) return;
    console.log(data);

    fetchMore({
      variables: { page: Math.ceil(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult?.fetchUseditems,
          ],
        };
      },
    });
  }

  // const onClickBasket = (el: IUseditem) => () => {
  //   const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
  //   let isExists = false;
  //   baskets.forEach((basketEl: IUseditem) => {
  //     if (el._id === basketEl._id) isExists = true;
  //   });
  //   if (isExists) {
  //     setIsEdit(el);
  //     alert("이미 장바구니에 담으셨습니다");
    
  //     return;
  //   }
  //   const { __typename, ...newEl } = el;
  //   baskets.push(newEl);
  //   // baskets.push(el);
  //   localStorage.setItem("basket", JSON.stringify(baskets));
  //   setIsEdit(el);
  //   alert("장바구니에 성공적으로 담았습니다");
  //   // router.push(`/market/basket`);
  // };

  

  return (
    <MarketListPresenter
      data={data}
      onClickMarketDetail={onClickMarketDetail}
      // onClickBasket={onClickBasket}
      onClickMarketWrite={onClickMarketWrite}
      onLoadMore={onLoadMore}
      isEdit={isEdit}
    />
  );
}
