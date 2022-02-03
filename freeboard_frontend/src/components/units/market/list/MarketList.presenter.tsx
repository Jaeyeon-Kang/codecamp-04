import { getDate } from "../../../../commons/libraries/utils";
import {
  Wrapper,
  Title,
  Row,
  ColumnHeaderCheck,
  ColumnCheck,
  ColumnHeaderBasic,
  ColumnHeaderNumber,
  ColumnHeaderName,
  ColumnBasic,
  ColumnNumber,
  ColumnName,
  Basket,
  Footer,
  Button,
  PencilIcon,
  StoreWrapper,
  StoreWrapperDisplay,
  Images,
  ButtonWrapper,
} from "./MarketList.styles";
import InfiniteScroll from "react-infinite-scroller";
// import { v4 as uuidv4 } from "uuid";
import { MarketListProps } from "./MarketList.types";
import ItemWrapperContainer from "../../../commons/ItemWrapper/ItemWrapper.container";
import { v4 as uuidv4 } from "uuid";
import Heart from "react-heart";

export default function MarketListPresenter(props: MarketListProps) {
  return (
    <>
      <Wrapper>
        <Title>상품목록</Title>
        <ButtonWrapper>
          <Button onClick={props.onClickMarketWrite}>
            <PencilIcon src="/images/board/list/write.png" />
            게시물 등록하기
          </Button>
        </ButtonWrapper>
        {/* <Row>
          <ColumnHeaderCheck>
            {" "}
            <input type="checkbox" />
          </ColumnHeaderCheck>

          <ColumnHeaderNumber>번호</ColumnHeaderNumber>
          <ColumnHeaderName>상품명</ColumnHeaderName>
          <ColumnHeaderBasic>작성자</ColumnHeaderBasic>
          <ColumnHeaderBasic>가격</ColumnHeaderBasic>
          <ColumnHeaderBasic>날짜</ColumnHeaderBasic>
          <ColumnHeaderBasic>장바구니</ColumnHeaderBasic>
        </Row> */}
        <StoreWrapperDisplay>
          {/* <InfiniteScroll
          pageStart={0}
          loadMore={props.onLoadMore}
          hasMore={true}
          useWindow={false}
        > */}
          {props.data?.fetchUseditems.map((el, index) => (
            <StoreWrapper key={uuidv4()}>
              {el.images?.[0] ? (
                <Images
                  src={`https://storage.googleapis.com/${el.images?.[0]}`}
                  onClick={props.onClickMarketDetail}
                  id={el._id}
                />
              ) : (
                <Images onClick={props.onClickMarketDetail} />
              )}

              {/* <Basket
                isEdit={props.isEdit}
                id={el._id}
                onClick={props.onClickBasket(el)}
              >
                추가하기
              </Basket> */}
              <ColumnName id={el._id} onClick={props.onClickMarketDetail}>
                {el.name}
              </ColumnName>
              {/* <ColumnBasic>{el.seller?.name}</ColumnBasic> */}
              <ColumnBasic>{el.price} 원</ColumnBasic>
              {/* <ColumnBasic>{getDate(el.createdAt)}</ColumnBasic> */}
            </StoreWrapper>
          ))}
          {/* <Footer></Footer> */}
          {/* </InfiniteScroll> */}
        </StoreWrapperDisplay>
      </Wrapper>
    </>
  );
}
