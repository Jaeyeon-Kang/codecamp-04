import { useMutation } from "@apollo/client";
import MarketWritePresenter from "./MarketWrite.presenter";
import { CREATE_USED_ITEM, UPDATE_USED_ITEM } from "./MarketWrite.queries";
import { FormValues } from "./MarketWrite.types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { schema } from "./MarketWrite.validations";
import { useRouter } from "next/router";

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
          },
        },
      });
      router.push(`/boards/market/${router.query.myId}`);
    } catch (error) {
      alert(error.message);
    }
  };

  function onChangeMyYoutubeUrl(event: ChangeEvent<HTMLInputElement>) {
    setYoutubeUrl(event.target.value);
  }

  function onChangeAddressDetail(event: ChangeEvent<HTMLInputElement>) {
    setAddressDetail(event.target.value);
  }

  function onClickAddressSearch() {
    setIsOpen(true);
  }

  function onCompleteAddressSearch(data: any) {
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsOpen(false);
    setIsModalVisible(false);
  }

  function onChangeFileUrls(fileUrl: string, index: number) {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  }

  useEffect(() => {
    if (props.data?.fetchBoard.images?.length) {
      setFileUrls([...props.data?.fetchBoard.images]);
    }
  }, [props.data]);

  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <MarketWritePresenter
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      onClickRegister={onClickRegister}
      onClickUpdate={onClickUpdate}
      updateData={props.updateData}
      isEdit={props.isEdit}
      onChangeMyYoutubeUrl={onChangeMyYoutubeUrl}
      onChangeAddressDetail={onChangeAddressDetail}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onChangeFileUrls={onChangeFileUrls}
      isActive={isActive}
      isOpen={isOpen}
      zipcode={zipcode}
      address={address}
      addressDetail={addressDetail}
      fileUrls={fileUrls}
      handleOk={handleOk}
      handleCancel={handleCancel}
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
    />
  );
}
