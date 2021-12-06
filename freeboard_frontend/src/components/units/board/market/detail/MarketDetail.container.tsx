import MarketDetailPresenter from "./MarketDetail.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEM } from "./MarketDetail.queries";
import { useRouter } from "next/router";

export default function MarketDetailContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.myId,
    },
  });

  function onClickMarketList() {
    router.push("/boards/market/list");
  }
  return (
    <MarketDetailPresenter data={data} onClickMarketList={onClickMarketList} />
  );
}