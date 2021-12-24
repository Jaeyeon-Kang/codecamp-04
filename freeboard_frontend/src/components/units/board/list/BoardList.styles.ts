import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;

export const BestCommentWrapperTop = styled.div`
  width: 100%;
  /* background-color: blue; */
  display: flex;
  flex-direction: row;
`;

export const BestCommentWrapper = styled.div`
  width: 282px;
  height: 257px;
  background-color: white;
  box-shadow: 5px 5px 10px gray;
  border: 0px solid gray;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  padding: 0px 0px 0px 0px;
  margin: 0px 10px 0px 10px;
  overflow: hidden;
`;

export const BestCommentTitle = styled.div`
  font-size: 24px;
`;

export const BestCommentImage = styled.img`
  cursor: pointer;
`;

export const BestCommentWriter = styled.div``;

export const BestCommentDate = styled.div``;

export const BestCommentLikeIcon = styled.img``;

export const BestCommentLikeCount = styled.div``;

export const BestCommentImageIcon = styled.div``;

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
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

export const TextToken = styled.span`
  color: ${(props) => (props.isMatched ? "red" : "black")};
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;
  cursor: pointer;

  :hover {
    color: salmon;
  }
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

export const PageNation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  /* :hover {
    color: blueviolet;
  } */
`;

export const NextPage = styled.div`
  cursor: pointer;
  /* :hover {
    color: blueviolet;
  } */
`;
