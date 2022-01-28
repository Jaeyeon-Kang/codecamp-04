import * as S from "../02/Searchbars02.styles";
import { v4 as uuidv4 } from "uuid";

const Searchbars02Presenter = (props) => {
  return (
    <S.Wrapper>
      검색어 입력: <input type="text" onChange={props.onChangeSearch} />
      {new Array(10).fill(1).map((_, index) => (
        <span key={uuidv4()} onClick={props.onClickPage} id={String(index + 1)}>
          {index + 1}
        </span>
      ))}
    </S.Wrapper>
  );
};

export default Searchbars02Presenter;
