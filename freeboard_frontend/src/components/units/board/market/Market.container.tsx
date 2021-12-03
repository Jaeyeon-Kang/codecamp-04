import MarketPresenter from "./Market.presenter";
import { FormValues } from "./Market.types";

export default function MarketContainer() {
  function onClickRegister(data: FormValues) {
    console.log(data);
  }

  return <MarketPresenter onClickRegister={onClickRegister} />;
}
