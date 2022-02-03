import { MouseEventHandler } from "react";

export interface MarketListProps {
  isEdit: any;
  isExists: any;
  active: any;
  data: any;
  onClickMarketDetail: MouseEventHandler<HTMLDivElement> | undefined;
  onClickBasket: any;
}
   