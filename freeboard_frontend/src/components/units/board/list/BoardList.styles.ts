import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* width: 1200px; */
  margin: 100px;
`;

export const BestCommentWrapperTop = styled.div`
  /* width: 100%; */
  /* background-color: blue; */
  display: flex;
  flex-direction: row;
`;

export const BestCommentWrapper = styled.div`
  /* width: 182px; */

  background-color: black;
  box-shadow: 5px 5px 10px gray;
  border: 0px solid gray;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  /* margin-left: 30px; */
  overflow: hidden;
  width: 290px;
  height: 180px;
`;

export const BestCommentTitle = styled.div`
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  padding: 5px 0px 0px 10px;
`;

export const BestCommentImage = styled.div`
  cursor: pointer;
  background: pink;
`;

export const BestWriterToDate = styled.div`
  /* background: red; */
  display: flex;
  justify-content: flex-start;
  padding-left: 10px;
  font-size: 6px;
`;
export const BestCommentWriter = styled.div``;

export const BestIconToCount = styled.div`
  display: flex;
  padding-left: 10px;
  align-items: center;
`;
export const BestCommentDate = styled.div``;

export const BestCommentLikeIcon = styled.img`
  width: 15px;
  height: 15px;
`;

export const BestCommentLikeCount = styled.div`
  padding-left: 10px;
`;

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

export const SliderWrapper = styled.div`
  width: 100%;
  /* height: 1200px; */
  background: yellow;

  .slick-next-arrow {
    font-size: 20px;
    position: absolute;
    width: 23px;
    height: 23px;
    top: 116px;
    right: -18px;
    background-image: url("/images/landing/rightarrow1.png");
    background-size: 100%;
    background-repeat: no-repeat;
    overflow: hidden;
  }

  .slick-before-arrow {
    font-size: 20px;
    position: absolute;
    width: 23px;
    height: 23px;
    top: 116px;
    left: -53px;
    background-image: url("/images/landing/leftarrow1.png");
    background-size: 100%;
    background-repeat: no-repeat;
    overflow: hidden;
  }
`;
