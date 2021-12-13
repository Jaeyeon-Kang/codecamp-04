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
  ZipcodeWrapper,
  Zipcode,
  SearchButton,
  Address,
  ImageWrapper,
} from "./MarketWrite.styles";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { schemaEdit, schemaNew } from "./MarketWrite.validations";
import { v4 as uuidv4 } from "uuid";
import { Modal } from "antd";
import { DaumPostcode } from "react-daum-postcode";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function MarketWritePresenter(props) {
  const { handleSubmit, register, setValue, trigger, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(props.isEdit ? schemaEdit : schemaNew),
  });
  function handleChange(value: string) {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    trigger("contents");
  }

  return (
    <form
      onSubmit={handleSubmit(
        props.isEdit ? props.onClickUpdate : props.onClickRegister
      )}
    >
      {props.isModalVisible && (
        <Modal
          visible={true}
          onOk={props.handleOk}
          onCancel={props.handleCancel}
        >
          <DaumPostcode onComplete={props.onCompleteAddressSearch} />
        </Modal>
      )}
      <Wrapper>
        <Title>{props.isEdit ? "상품수정하기" : "상품등록하기"}</Title>
        <InputWrapper>
          <Label>상품명</Label>
          <ProductName
            type="text"
            placeholder="상품명"
            {...register("productName")}
            // onChange={props.updateData}
            defaultValue={props.updateData?.fetchUseditem?.name || ""}
          />
          <ErrorMessage>{formState.errors.productName?.message}</ErrorMessage>
        </InputWrapper>
        <InputWrapper>
          <Label>한줄요약</Label>
          <ProductRemark
            type="text"
            {...register("productRemark")}
            // readOnly={Boolean(props.updateData?.fetchUseditem.remarks)}
            defaultValue={props.updateData?.fetchUseditem.remarks || ""}
          />
          <ErrorMessage>{formState.errors.productRemark?.message}</ErrorMessage>
        </InputWrapper>
        <InputWrapper>
          <Label>상품설명</Label>
          <ReactQuill
            onChange={handleChange}
            // readOnly={Boolean(props.updateData?.fetchUseditem.contents)}
            defaultValue={props.updateData?.fetchUseditem.contents || ""}
          />

          <ErrorMessage>{formState.errors.contents?.message}</ErrorMessage>
        </InputWrapper>
        <InputWrapper>
          <Label>가격</Label>
          <ProductPrice
            type="text"
            {...register("productPrice")}
            // readOnly={Boolean(props.updateData?.fetchUseditem.price)}
            defaultValue={props.updateData?.fetchUseditem.price || ""}
          />
          <ErrorMessage>{formState.errors.productPrice?.message}</ErrorMessage>
        </InputWrapper>
        <InputWrapper>
          <Label>주소</Label>
          <ZipcodeWrapper>
            <Zipcode
              placeholder="07250"
              readOnly
              value={
                props.zipcode ||
                props.data?.fetchBoard.boardAddress?.zipcode ||
                ""
              }
            />
            <SearchButton
              type="button"
              onClick={() => props.setIsModalVisible(true)}
            >
              우편번호 검색
            </SearchButton>
          </ZipcodeWrapper>
          <Address
            readOnly
            value={
              props.address ||
              props.data?.fetchBoard.boardAddress?.address ||
              ""
            }
          />
          <Address
            onChange={props.onChangeAddressDetail}
            defaultValue={
              props.data?.fetchBoard.boardAddress?.addressDetail || ""
            }
          />
        </InputWrapper>

        <ImageWrapper>
          <Label>사진첨부</Label>
        </ImageWrapper>
        <Button01
          type="submit"
          name={props.isEdit ? "수정하기" : "등록하기"}
          isValid={formState.isValid}
        />
      </Wrapper>
    </form>
  );
}
