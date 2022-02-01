import styled from "@emotion/styled"

export const Basket = styled.button`
  width: 100px;
  height: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 5%;
  right: 5%;
  /* color: red; */
  color: ${(props) => (props.isEdit ? "red" : "black")};
}
`;

export const StoreWrapper = styled.div`
  width: 300px;
  height: 300px;
  background: blue;
  margin-left: 100px;
  margin-top: 100px;
  position: relative;
`;

export const Images = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  /* border: 2px solid black; */
  /* background: red; */
`;


export const ColumnBasic = styled.div`
  width: 20%;
  text-align: center;
`;

export const ColumnName = styled.div`
  width: 70%;
  text-align: center;
  cursor: pointer;

  :hover {
    color: salmon;
  }
`;