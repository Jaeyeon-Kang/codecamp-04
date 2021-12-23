import { IBoard } from "../../../../commons/types/generated/types";
import { useEffect, useState } from "react";
import MarketBasketPresenter from "./MarketBasket.presenter";

export default function MarketBasketContainer() {
  const [basketItems, setBasketItems] = useState<IBoard[]>([]);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    setBasketItems(baskets);
  }, []);

  function onClickDelete(event) {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    const newBaskets = baskets.filter((el) => el._id !== event?.target.id); // 10개
    localStorage.setItem("basket", JSON.stringify(newBaskets));
    alert("삭제되었습니다.");
    location.reload();
  }

  return (
    <MarketBasketPresenter
      basketItems={basketItems}
      onClickDelete={onClickDelete}
    />
  );
}
