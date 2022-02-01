import { useQuery } from "@apollo/client";
import router from "next/router";
import { useState } from "react";
import {
  IQuery,
  IQueryFetchUseditemArgs,
  IUseditem,
} from "../../../commons/types/generated/types";
import { FETCH_USED_ITEMS } from "../../units/market/list/MarketList.queries";
import ItemWrapperPresenter from "./ItemWrapper.presenter";

const ItemWrapperContainer = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEMS);

  const onClickBasket = (el: IUseditem) => () => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    let isExists = false;
    baskets.forEach((basketEl: IUseditem) => {
      if (el._id === basketEl._id) isExists = true;
    });
    if (isExists) {
      alert("이미 장바구니에 담으셨습니다");
      setIsEdit(false);
      return;
    }
    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    // baskets.push(el);
    localStorage.setItem("basket", JSON.stringify(baskets));
    setIsEdit(true);
    alert("장바구니에 성공적으로 담았습니다");
    // router.push(`/market/basket`);
  };

  const onClickMarketDetail = (event: any) => {
    // console.log("el.id",el._id)
    console.log("event.target", event.target);
    router.push(`/market/${event?.target?.id}`);
  };

  return (
    <ItemWrapperPresenter
      data={data}
      isEdit={isEdit}
      onClickBasket={onClickBasket}
      onClickMarketDetail={onClickMarketDetail} active={undefined} el={undefined} props={undefined}    />
  );
};
export default ItemWrapperContainer;
