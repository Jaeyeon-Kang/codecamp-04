import { MouseEventHandler } from "react";

export interface MarketListProps {
  isExists: any;
  active: any;
  data: any;
  onClickMarketDetail: MouseEventHandler<HTMLDivElement> | undefined;
  onClickBasket: any;
}
   