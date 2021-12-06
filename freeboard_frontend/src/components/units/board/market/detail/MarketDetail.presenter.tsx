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
        <ProductContents>{props.data?.fetchUseditem?.contents}</ProductContents>
      </InputWrapper>

      <Button>목록으로</Button>
      <Button>수정하기</Button>
      <Button>삭제하기</Button>
    </Wrapper>
  );
}
