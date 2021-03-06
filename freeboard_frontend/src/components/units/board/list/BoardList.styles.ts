import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 100px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2%;
  margin-right: 1%;
`;
export const RoundDiv = styled.div`
  width: 280px;
  height: 48px;
  flex-grow: 0;
  margin-left: 320px;
  /* padding-bottom: 3px; */
  border-radius: 90px;
  /* box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.2); */
  border: 1px solid gray;
  background-color: #fafafa;
  padding-left: 40px;
  padding-right: 9.8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 500ms;
`;

export const RoundDivInnerText = styled.input`
  width: 170px;
  height: 30px;
  flex-grow: 0;
  font-size: 16px;
  border: none;
  text-align: left;
  color: #706b68;
  transition: 500ms;
  background-color: #fafafa;
  :focus {
    /* outline: 1px solid rgba(0, 0, 0, 0.3); */
    outline: none;
  }
`;

export const RoundDivCircle = styled.div`
  width: 32px;
  height: 32px;
  flex-grow: 0;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: 300ms;
  cursor: pointer;
`;

export const RoundDivInnerIcon = styled.img`
  width: 12.4px;
  height: 12.4px;
  overflow: hidden;
  transition: 300ms;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 2.8em;
  font-weight: 600;
  margin-top: 4%;
  margin-bottom: 1%;
`;
export const BestCommentWrapperTop = styled.div`
  /* background-color: blue; */
  display: flex;

  justify-content: space-between;
  height: 300px;
`;

export const SliderWrapper = styled.div`
  .slick-next-arrow {
    font-size: 20px;
    position: absolute;
    width: 35px;
    height: 35px;
    top: 219px;
    right: -45px;
    background-image: url("/images/landing/rightarrow1.png");
    background-size: 100%;
    background-repeat: no-repeat;
    overflow: hidden;
  }

  .slick-before-arrow {
    font-size: 20px;
    position: absolute;
    width: 35px;
    height: 35px;
    top: 219px;
    left: -30px;
    background-image: url("/images/landing/leftarrow1.png");
    background-size: 100%;
    background-repeat: no-repeat;
    overflow: hidden;
  }
`;

export const BestCommentWrapper = styled.div`
  /* background-color: black; */
  flex-direction: column;
  overflow: hidden;
  padding: 20px;
  border: 0px solid gray;
`;

export const BestCommentTitle = styled.div`
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  padding: 5px 0px 0px 10px;
`;

export const BestCommentImage = styled.img`
  cursor: pointer;
  height: 450px;
  overflow: hidden;
  object-fit: cover;
  object-position: center center;

  /* box-shadow: 5px 5px 10px gray; */
`;

export const BestCommentImage2 = styled.div`
  cursor: pointer;
  background: gray;
  height: 450px;
  overflow: hidden;
  object-fit: cover;
  object-position: center center;

  /* box-shadow: 5px 5px 10px gray; */
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
  

  /* 
  :hover {
    color: salmon;
  } */
`;

export const TextToken = styled.span`
  color: ${(props) => (props.isMatched ? "red" : "black")};
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
  font-weight: 600;
  font-size: 1.2em;
  border-bottom: 1px solid gray;
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;
  font-weight: 600;
  font-size: 1.2em;
  border-bottom: 1px solid gray;
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
  background: pink;
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
  :hover {
    color: blueviolet;
  }
`;

export const NextPage = styled.div`
  cursor: pointer;
  :hover {
    color: blueviolet;
  }
`;
