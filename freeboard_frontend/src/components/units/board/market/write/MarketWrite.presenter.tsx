import Button01 from "../../../../commons/buttons/01/Button01";
import { Wrapper,
InputWrapper,
Title,
Label,
ProductName,
ProductRemark,
ProductContents,
ProductPrice,
ErrorMessage } from "./MarketWrite.styles"



export default function MarketWritePresenter(props) {

  return (
    <form onSubmit={props.handleSubmit(props.onClickRegister)}>
        <Wrapper>
           <Title>상품등록하기</Title>
            <InputWrapper>
              <Label>상품명</Label>
              <ProductName type="text" plceholder="상품명" {...props.register("productName")} />
              <ErrorMessage>{props.formState.errors.productName?.message}</ErrorMessage>
             </InputWrapper>
             <InputWrapper>
             <Label>한줄요약</Label>
            <ProductRemark type="text" {...props.register("productRemark")}/>
          <ErrorMessage>{props.formState.errors.productRemark?.message}</ErrorMessage>
          </InputWrapper>
          <InputWrapper>
          <Label>상품설명
          </Label>
        <ProductContents type="text" {...props.register("productContents")} />
          <ErrorMessage>{props.formState.errors.productContents?.message}</ErrorMessage>
        </InputWrapper>
          <InputWrapper>
          <Label>가격</Label>
          <ProductPrice type="text" {...props.register("productPrice")} />
          <ErrorMessage>{props.formState.errors.productPrice?.message}</ErrorMessage>
        </InputWrapper>
          <Button01 type="submit" name="등록하기" isValid={props.formState.isValid} />

        </Wrapper>
    </form>
  );
}
