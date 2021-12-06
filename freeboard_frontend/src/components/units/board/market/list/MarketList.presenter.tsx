import { getDate } from "../../../../../commons/libraries/utils";
import {
  Wrapper,
  Row,
  ColumnHeaderBasic,
  ColumnHeaderName,
  ColumnBasic,
  ColumnName,
  Basket,
} from "./MarketList.styles";

export default function MarketListPresenter(props) {
  return (
    <>
      <Wrapper>
        <Row>
          <ColumnHeaderBasic>번호</ColumnHeaderBasic>
          <ColumnHeaderName>상품명</ColumnHeaderName>
          <ColumnHeaderBasic>가격</ColumnHeaderBasic>
          <ColumnHeaderBasic>날짜</ColumnHeaderBasic>
          <ColumnHeaderBasic>장바구니</ColumnHeaderBasic>
        </Row>
        {props.data?.fetchUseditems.map((el, index) => (
          <Row key={el._id}>
            <ColumnBasic>{index + 1}</ColumnBasic>
            <ColumnName id={el._id} onClick={props.onClickMarketDetail}>
              {el.name}
            </ColumnName>
            <ColumnBasic>{el.price}</ColumnBasic>
            <ColumnBasic>{getDate(el.createdAt)}</ColumnBasic>
            <ColumnBasic>
              <Basket onClick={props.onClickBasket}>추가하기</Basket>
            </ColumnBasic>
          </Row>
        ))}
      </Wrapper>
    </>
  );
}
