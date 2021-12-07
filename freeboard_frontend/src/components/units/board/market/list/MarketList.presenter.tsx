import { getDate } from "../../../../../commons/libraries/utils";
import {
  Wrapper,
  Row,
  ColumnHeaderBasic,
  ColumnHeaderName,
  ColumnBasic,
  ColumnName,
  Basket,
  Footer,
  Button,
  PencilIcon,
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
              <Basket onClick={props.onClickBasket(el)}>추가하기</Basket>
            </ColumnBasic>
          </Row>
        ))}
        <Footer>
          <Button onClick={props.onClickMarketWrite}>
            <PencilIcon src="/images/board/list/write.png" />
            게시물 등록하기
          </Button>
        </Footer>
      </Wrapper>
    </>
  );
}
