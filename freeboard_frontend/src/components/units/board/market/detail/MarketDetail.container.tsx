import MarketDetailPresenter from "./MarketDetail.presenter";
import { useQuery, useMutation } from "@apollo/client";
import {
  FETCH_USED_ITEM,
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USED_ITEM,
} from "./MarketDetail.queries";
import { useRouter } from "next/router";

import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../../commons/types/generated/types";

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
  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );

  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);

  function onClickMarketList() {
    router.push("/boards/market/list");
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
      router.push("/boards/mypage");
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

  return (
    <MarketDetailPresenter
      data={data}
      onClickMarketList={onClickMarketList}
      onClickPurchase={onClickPurchase}
      onClickDelete={onClickDelete}
      onClickMarketUpdate={onClickMarketUpdate}
    />
  );
}
