import Button01 from "../../../../commons/buttons/01/Button01";
import {
  Wrapper,
  InputWrapper,
  Title,
  Label,
  ProductName,
  ProductRemark,
  ProductPrice,
  ErrorMessage,
} from "./MarketWrite.styles";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { schema } from "./MarketWrite.validations";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function MarketWritePresenter(props) {
  const { handleSubmit, register, setValue, trigger, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  function handleChange(value: string) {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  }

  return (
    // <form onSubmit={handleSubmit(props.onClickRegister)}>
    <form onSubmit={handleSubmit(props.onClickRegister)}>
      <Wrapper>
        <Title>상품등록하기</Title>
        <InputWrapper>
          <Label>상품명</Label>
          <ProductName
            type="text"
            placeholder="상품명"
            {...register("productName")}
          />
          <ErrorMessage>{formState.errors.productName?.message}</ErrorMessage>
        </InputWrapper>
        <InputWrapper>
          <Label>한줄요약</Label>
          <ProductRemark type="text" {...register("productRemark")} />
          <ErrorMessage>{formState.errors.productRemark?.message}</ErrorMessage>
        </InputWrapper>
        <InputWrapper>
          <Label>상품설명</Label>
          <ReactQuill onChange={handleChange} />
          <ErrorMessage>{formState.errors.contents?.message}</ErrorMessage>
        </InputWrapper>
        <InputWrapper>
          <Label>가격</Label>
          <ProductPrice type="text" {...register("productPrice")} />
          <ErrorMessage>{formState.errors.productPrice?.message}</ErrorMessage>
        </InputWrapper>
        <Button01 type="submit" name="등록하기" isValid={formState.isValid} />
      </Wrapper>
    </form>
  );
}
