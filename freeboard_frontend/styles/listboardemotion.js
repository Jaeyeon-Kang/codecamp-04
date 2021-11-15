import styled from "@emotion/styled";

export const FullWrapper = styled.div`
  width: 1920px;
  height: 3000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto";
`;

export const InnerWrapper = styled.div`
  width: 1200px;
  padding-top: 696px;
  /* background-color: cyan; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Row = styled.tr`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Column = styled.td`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  background-color: lavender;
  border: 0px solid black;
  border-width: 0px 0px 0px 0px;
`;

export const BestContents = styled.table`
  width: 100%;
  height: 339px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 80px;
  background-color: gray;
  /* background-color: skyblue; */
`;

export const BestContentsText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 36px;
  font-weight: 700;
`;

export const BestContentsBox = styled.div`
  width: 100%;
  height: 257px;
  display: flex;
  flex-direction: row;
  font-size: 18px;
  font-weight: 500;
  padding-top: 100px;
  /* background-color: yellow; */
`;

export const OrdinaryContentsTable = styled.div`
  border-spacing: 0px;
  width: 100%;
  padding-top: 50px;
  /* background-color: darkorchid; */
  display: flex;
  justify-content: center;
`;

export const TableWrapper = styled.table`
  width: 1200px;
  border-collapse: collapse;
  border: 0px solid black;
  border-width: 1px 0px 1px 0px;
`;

export const HeadRow = styled.th`
  padding: 14px 0 14px 0;
  background-color: white;
  font-size: 18px;
  font-weight: 700;
  /* border: 1px solid black; */
  /* border-width: 1px 0px 1px 0px; */
`;

export const MyTr = styled.tr`
  text-align: center;
  /* background-color: chartreuse; */
  border: 0px solid #bdbdbd;
  font-size: 16px;
  font-weight: 400;
  border-width: 1px 0px 0px 0px;
`;

export const MyTd = styled.td`
  padding: 14px 0 14px 0;
  background-color: white;
  /* color doesn't need */
`;
export const MyTdButton = styled.section`
  background-color: none;
  cursor: pointer;
  :hover {
    background-position: right center; /* change the direction of the change here */
    color: deeppink;
    text-decoration: none;
  }
`;
