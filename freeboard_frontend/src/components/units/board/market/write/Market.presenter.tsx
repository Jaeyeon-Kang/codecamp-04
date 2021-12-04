import Button01 from "../../../../commons/buttons/01/Button01";




export default function MarketPresenter(props) {

  return (
    <form onSubmit={props.handleSubmit(props.onClickRegister)}>
      <h1>상품등록페이지</h1>
      상품이름: <input type="text" {...props.register("productName")} />
      <div>{props.formState.errors.productName?.message}</div>
      한줄소개: <input type="text" {...props.register("productRemark")}/>
      <div>{props.formState.errors.productRemark?.message}</div>
      내용: <input type="text" {...props.register("productContents")} />
      <div>{props.formState.errors.productContents?.message}</div>
      가격: <input type="text" {...props.register("productPrice")} />
      <div>{props.formState.errors.productPrice?.message}</div>

      <Button01 type="submit" name="등록하기" isValid={props.formState.isValid} />
    </form>
  );
}
