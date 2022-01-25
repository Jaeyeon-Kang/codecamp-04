import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  margin: 100px;
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: blue;
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;

  :hover {
    color: salmon;
  }
`;

export const StoreWrapperDisplay = styled.div`
 display: flex;
   width: 1920px;;
  justify-content: space-between;
  background: yellow;
  flex-wrap: wrap;
  
`

export const StoreWrapper = styled.div`
width: 300px;
height: 300px;
background: blue;
margin-left: 100px;
margin-top: 100px;


`

export const ColumnHeaderCheck = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnHeaderBasic = styled.div`
  width: 20%;
  text-align: center;
`;

export const ColumnHeaderNumber = styled.div`
  width: 23%;
  text-align: center;
`;

export const ColumnHeaderName = styled.div`
  width: 65%;
  text-align: center;
`;
export const ColumnCheck = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 20%;
  text-align: center;
`;

export const ColumnNumber = styled.div`
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

export const Basket = styled.button`
  width: 100px;
  height: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 50px;
`;

export const PencilIcon = styled.img``;

export const Button = styled.button`
  width: 171px;
  height: 52px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #f5f2fc;
  }
`;