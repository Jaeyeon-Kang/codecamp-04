import { useMutation } from "@apollo/client";
import MarketWritePresenter from "./MarketWrite.presenter";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./MarketWrite.queries";
import { FormValues } from "./MarketWrite.types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { schema } from "./MarketWrite.validations";
import { useRouter } from "next/router";
import { useState } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function MarketWriteContainer(props) {
  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [updateUseditem] = useMutation(UPDATE_USED_ITEM);

  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const onClickRegister = async (data: FormValues) => {
    console.log(data);
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.productName,
            contents: data.contents,
            price: data.productPrice,
            remarks: data.productRemark,
            useditemAddress: {
              zipcode: zipcode,
              address: address,
              addressDetail: addressDetail,
            },
          },
        },
      });
      router.push(`/boards/market/${result.data.createUseditem._id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickUpdate = async (data: FormValues) => {
    try {
      const result = await updateUseditem({
        variables: {
          useditemId: router.query.myId,
          updateUseditemInput: {
            name: data.productName,
            contents: data.contents,
            price: data.productPrice,
            remarks: data.productRemark,
            useditemAddress: {
              zipcode: zipcode,
              address: address,
              addressDetail: addressDetail,
            },
          },
        },
      });
      router.push(`/boards/market/${router.query.myId}`);
    } catch (error) {
      alert(error.message);
    }
  };

  //
  // 주소 관련(다음맵)
  //
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  function onCompleteAddressSearch(data: any) {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen(false);
    setIsModalVisible(false);
  }

  function onChangeAddressDetail(event: ChangeEvent<HTMLInputElement>) {
    setAddressDetail(event.target.value);
  }

  function onClickAddressSearch() {
    setIsOpen(true);
  }

  return (
    <MarketWritePresenter
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      onClickRegister={onClickRegister}
      onClickUpdate={onClickUpdate}
      // 수정관련
      updateData={props.updateData}
      isEdit={props.isEdit}
      // 주소관련
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      handleOk={handleOk}
      handleCancel={handleCancel}
      onCompleteAddressSearch={onCompleteAddressSearch}
      zipcode={zipcode}
      address={address}
      addressDetail={addressDetail}
      onChangeAddressDetail={onChangeAddressDetail}
      onClickAddressSearch={onClickAddressSearch}
    />
  );
}
