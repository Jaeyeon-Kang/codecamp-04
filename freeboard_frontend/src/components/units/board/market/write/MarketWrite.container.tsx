import { useMutation } from "@apollo/client";
import MarketWritePresenter from "./MarketWrite.presenter"
import {CREATE_USED_ITEM} from "./MarketWrite.queries"
import { FormValues } from "./MarketWrite.types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { schema } from "./MarketWrite.validations";


export default function MarketWriteContainer() {

  const [createUseditem] = useMutation(CREATE_USED_ITEM)
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const onClickRegister = async (data: FormValues) => {
    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput:{
            name: data.productName,
            contents: data.productContents,
            price: data.productPrice,
            remarks: data.productRemark
          }}
      })
      console.log(result.data.createUseditem)
    } catch (error) {
      alert(error.message)
    }
  }
  
  

  return <MarketWritePresenter 
  handleSubmit={handleSubmit}
  register={register}
  formState={formState}
  onClickRegister={onClickRegister} />;
}
