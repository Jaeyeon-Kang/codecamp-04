import * as S from "../ItemWrapper/ItemWrapper.styles";
import { v4 as uuidv4 } from "uuid";
import { ItemWrapperProps
 } from "./ItemWrapper.types";
const ItemWrapperPresenter = (props: ItemWrapperProps) => {
  return (
      <>
    {props.data?.fetchUseditems.map((el:any, index) => (
    <S.StoreWrapper key={uuidv4()}>
      {el.images?.[0] ? (
        <S.Images
          src={`https://storage.googleapis.com/${el.images?.[0]}`}
          onClick={props.onClickMarketDetail}
          id={el._id}
        />
      ) : (
        <S.Images onClick={props.onClickMarketDetail} />
      )}

      <S.Basket
        id={el._id}
        isEdit={props.isEdit}
        onClick={props.onClickBasket(el)}
      >
        추가하기
      </S.Basket>
      <S.ColumnName id={el._id} onClick={props.onClickMarketDetail}>
        {el.name}
      </S.ColumnName>
      {/* <ColumnBasic>{el.seller?.name}</ColumnBasic> */}
      <S.ColumnBasic>{el.price}</S.ColumnBasic>
      {/* <ColumnBasic>{getDate(el.createdAt)}</ColumnBasic> */}
    </S.StoreWrapper>
       ))}
  </>
  );

};

export default ItemWrapperPresenter;
