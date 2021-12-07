import { Wrapper } from "./MarketBasket.styles";

export default function MarketBasketPresenter(props) {
  return (
    <Wrapper>
      <h1>비회원으로 담은 나만의 장바구니!!</h1>
      {props.basketItems.map((el, index) => (
        <div key={el._id}>
          <span>{index + 1}</span>
          <span>{el.name}</span>
          <span>{el.price}</span>
          <button id={el._id} onClick={props.onClickDelete}>
            삭제하기
          </button>
        </div>
      ))}
    </Wrapper>
  );
}
