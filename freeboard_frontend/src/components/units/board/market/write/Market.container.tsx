import { useMutation } from "@apollo/client";
import MarketPresenter from "./Market.presenter"
import {CREATE_USED_ITEM} from "./Market.queries"
import { FormValues } from "./Market.types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { schema } from "./Market.validations";


export default function MarketContainer() {

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
  
  

  return <MarketPresenter 
  handleSubmit={handleSubmit}
  register={register}
  formState={formState}
  onClickRegister={onClickRegister} />;
}
