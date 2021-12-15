import {
  Wrapper,
  Title,
  InputWrapper,
  Label,
  ProductName,
  ProductRemark,
  ProductContents,
  ProductPrice,
  Button,
} from "./MarketDetail.styles";
import Dompurify from "dompurify";
import Head from "next/head";

export default function MarketDetailPresenter(props) {
  return (
    <Wrapper>
      <Title>상품상세보기</Title>
      <InputWrapper>
        <Label>상품명</Label>
        <ProductName>{props.data?.fetchUseditem?.name}</ProductName>
      </InputWrapper>
      <InputWrapper>
        <Label>가격</Label>
        <ProductPrice>{props.data?.fetchUseditem?.price}</ProductPrice>
      </InputWrapper>
      <InputWrapper>
        <Label>한줄요약</Label>
        <ProductRemark>{props.data?.fetchUseditem?.remarks}</ProductRemark>
      </InputWrapper>
      <InputWrapper>
        <Label>상품설명</Label>
        {process.browser ? (
          <ProductContents
            dangerouslySetInnerHTML={{
              __html: Dompurify.sanitize(
                String(props.data?.fetchUseditem?.contents)
              ),
            }}
          />
        ) : (
          <ProductContents />
        )}
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        {/* <Head>
          <script
            type="text/javascript"
            src="//dapi.kakao.com/v2/maps/sdk.js?appkey=c1573b07307af25f6bb7415ff47e92fc"
          ></script>
        </Head> */}
        <div id="map" style={{ width: "500px", height: "400px" }}></div>

        <div>
          {props.data?.fetchUseditem.useditemAddress?.zipcode} <br />
          {props.data?.fetchUseditem.useditemAddress?.address}
          {props.data?.fetchUseditem.useditemAddress?.addressDetail}
        </div>
      </InputWrapper>

      <Button onClick={props.onClickMarketList}>목록으로</Button>
      <Button onClick={props.onClickMarketUpdate}>수정하기</Button>
      <Button onClick={props.onClickDelete}>삭제하기</Button>
      <Button onClick={props.onClickPurchase}>구매하기</Button>
      <Button onClick={props.onClickWishList}>찜하기</Button>
    </Wrapper>
  );
}
