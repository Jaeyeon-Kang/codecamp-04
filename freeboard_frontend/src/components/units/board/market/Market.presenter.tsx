import Button01 from "../../../commons/buttons/01/Button01";
import Input01 from "../../../commons/input/input01";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { schema } from "./Market.validations";

export default function MarketPresenter(props) {
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(props.onClickRegister)}>
      상품명: <Input01 type="text" bbb={register("productName")} />
      <div>{formState.errors.productName?.message}</div>
      <Button01 isValid={formState.isValid}> 등록하기 </Button01>
    </form>
  );
}
